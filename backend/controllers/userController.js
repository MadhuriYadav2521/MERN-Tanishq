import Users from "../modals/userModal.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Products from "../modals/productModal.js";
import Transactions from "../modals/transactionModal.js"


export const Register = async (req, res) => {
    try {
        const { userName, email, password, role } = req.body.userData;
        console.log(req.body.userData);
        const existingUser = await Users.findOne({ email }).exec();
        if (existingUser) return res.json({ error: "User with this email already exist!" });

        const hashedPassword = bcrypt.hashSync(password, 10);
        if (!hashedPassword) return res.json({ error: "Error while storing password!" })
        console.log(hashedPassword);
        const user = new Users({
            userName, email, password: hashedPassword, role
        });
        console.log(user, "user");
        await user.save();
        return res.status(201).json({ success: true })

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error!" });
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body.userData;

        const user = await Users.findOne({ email });
        if (!user) return res.json({ error: "User not found!" })

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) return res.json({ error: "Wrong credentials!" })

        const userObj = { id: user._id, name: user.userName, email: user.email, role: user.role }
        const token = jwt.sign({ userId: user._id }, process.env.TOKEN);

        return res.json({ success: true, user: userObj, token })

    } catch (err) {
        console.log(err);
        return res.json({ error: "Internal server error!" });
    }
}

export const CurrentUser = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return res.json({ error: "Token is required!" });
        // console.log(req.body, "req.body of cu");

        const verifyToken = jwt.verify(token, process.env.TOKEN)
        if (!verifyToken) return res.json({ error: "Invalid token!" })
        const currentUser = verifyToken.userId

        const user = await Users.findOne({ _id: currentUser }).exec();
        if (user) {
            const userObj = { id: user._id, name: user.userName, email: user.email, role: user.role };
            return res.json({ success: true, user: userObj });
        }
        // return res.json({ error: "User not found!" })

    } catch (err) {
        console.log(err);
        return res.json({ error: "Internal server error!" })
    }
}

export const addToCart = async (req, res) => {
    try {
        const { productId, userId } = req.body
        if (!productId) return res.json({ error: "Product id is required!" })
        if (!userId) return res.json({ error: "User id is required!" })
        console.log(productId, userId, "pid,currentUser");

        // Check if the product is already in the user's cart
        const cUser = await Users.findOne({ _id: userId }).exec();
        const existingProduct = cUser.cart.includes(productId);
        console.log(existingProduct, "existingProduct");
        if (existingProduct) return res.json({ error: "Product already in cart!" });

        const user = await Users.findOneAndUpdate({ _id: userId }, { $push: { cart: productId } }, { new: true }).exec();
        if (!user) return res.json({ error: "User not found!" });
        console.log(user.cart, "userData");
        const products = user.cart;
        const totalCartProducts = products.length
        let total = 0;
        for (let x of products) {
            total = total + parseInt(x.price)
        }
        const cartObj = { allCartProducts: products, totalCartProducts }

        console.log(cartObj, "cartobj");
        return res.json({ success: true, cart: cartObj });

    } catch (err) {
        console.log(err);
        return res.json({ error: "Internal server error!" })
    }
}

export const getCartProduct = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) return res.json({ error: "User id is required!" });

        const user = await Users.findOne({ _id: userId }).populate('cart').exec();
        console.log(user, "userPopulate");
        if (!user) return res.json({ error: "User not found!" })
        console.log(user.cart, "user.cart");
        const productsOfCart = user.cart;
        let total = 0;
        for (let x of productsOfCart) {
            total = total + parseInt(x.price)
        }
        const totalCartProducts = productsOfCart.length
        const cartObj = { allCartProducts: productsOfCart, totalCartProducts }

        console.log(total, "total", totalCartProducts, "totalCartProducts", cartObj, "cartobj");
        return res.json({ success: true, productsOfCart, total, totalCartProducts, cart: cartObj })

    } catch (err) {
        console.log(err);
        return res.json({ error: "Internal server error!" })
    }
}


export const removeFromCart = async (req, res) => {
    try {
        const { productId, userId } = req.body
        if (!productId) return res.json({ error: "Product id is required!" })
        if (!userId) return res.json({ error: "User id id is required!" })

        const updateCart = await Users.findOneAndUpdate({ _id: userId }, { $pull: { cart: productId } }, { new: true }).populate('cart').exec();
        console.log(updateCart, "up cart");
        if (!updateCart) return res.json({ error: "Error while removing product from cart!" });

        const productsOfCart = updateCart.cart;
        let total = 0;
        for (let x of productsOfCart) {
            total = total + parseInt(x.price)
        }
        const totalCartProducts = productsOfCart.length
        const cartObj = { allCartProducts: productsOfCart, totalCartProducts }

        console.log(total, "total", totalCartProducts, "totalCartProducts", cartObj, "cartobj");
        return res.json({ success: true, productsOfCart, total, totalCartProducts, cart: cartObj })


    } catch (err) {
        console.log(err);
    }
}

export const buyNow = async (req, res) => {
    try {
        const { userId, cart, totalPrice, totalProducts } = req.body;
        if (!userId) return res.json({ error: "User id is required!" });
        console.log(userId, cart, totalPrice, totalProducts, " userId, cart,totalPrice, totalProducts");

        const user = await Users.findById(userId).populate().exec();
        if (!user) return res.json({ error: "User not found!" });

        const addToTransaction = new Transactions({
            userId: user._id,
            cart,
            totalPrice,
            totalProducts,
        });
        await addToTransaction.save();
        console.log(addToTransaction, "addToTransactions");

        const updateCart = await Users.findOneAndUpdate({ _id: userId }, { cart: [] }, { new: true }).exec();
        console.log(updateCart, "updateUserrr");
        const finalCart = updateCart.cart
        const totalCartProducts = finalCart.length
        const cartObj = { allCartProducts: finalCart, totalCartProducts }

        return res.json({ success: true, finalCart, cart: cartObj })

    } catch (err) {
        console.log(err);
        return res.json({ error: "Internal server error!" })
    }
}


export const getOrderHistory = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) return res.json({ error: "User id is required!" });

        const orders = await Transactions.find({ userId }).populate('cart').exec();
        console.log(orders, "orders");
        if (!orders) return res.json({ error: "You have not placed any orders yet!" });

        // create an arrray to store the order history
        const orderHistory = [];

        for (const order of orders) {
            // extraact the product IDs from the cart for this order
            const productIds = order.cart.map(item => item._id);

            //   find the cart products for this order
            const cartProducts = await Products.find({ _id: { $in: productIds } }).exec();

            // add this  order to the order hiistory
            orderHistory.push({
                orderDetails: order,
                cartProducts: cartProducts,
            });
        }

        return res.json({ success: true, orderHistory });

    } catch (err) {
        console.log(err);
        return res.json({ error: "Internal server error!" })
    }
}




// export const buyNow = async (req, res) => {
//     try {
//         const { userId, cart, totalPrice, totalProducts } = req.body;
//         if (!userId) return res.json({ error: "User id is required!" });
//         console.log(userId, cart, totalPrice, totalProducts, " userId, cart,totalPrice, totalProducts");

//         const user = await Users.findById(userId).populate().exec();
//         if (!user) return res.json({ error: "User not found!" });

//         const addToTransaction = new Transactions({ transaction: user.cart })
//         await addToTransaction.save();
//         console.log(addToTransaction, "addToTransactions");


//         return res.json({ success: true, finalCart })

//     } catch (err) {
//         console.log(err);
//         return res.json({ error: "Internal server error!" })
//     }
// }
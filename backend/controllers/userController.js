import Users from "../modals/userModal.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Products from "../modals/productModal.js";


export const Register = async (req, res) => {
    try {
        const { userName, email, password } = req.body.userData;
        console.log(req.body.userData);
        const existingUser = await Users.findOne({ email }).exec();
        if (existingUser) return res.json({ error: "User with this email already exist!" });

        const hashedPassword = bcrypt.hashSync(password, 10);
        if (!hashedPassword) return res.json({ error: "Error while storing password!" })
        console.log(hashedPassword);
        const user = new Users({
            userName, email, password: hashedPassword
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

        const userObj = { id: user._id, name: user.userName, email: user.email }
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
            const userObj = { id: user._id, name: user.userName, email: user.email };
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
        const id = req.params.id
        const currentUser = req.body.currentUser
        // console.log(currentUser, "currentUser");
        const cUser = await Users.findOne({_id: currentUser})
        // console.log(cUser,"cUser");
        // console.log(id, "idd back");
        const product = await Products.findOne({ _id: id }).exec();
        console.log(product, "proodct");
        if (product) {
            const existingProduct = cUser.cart.includes(id);
            // console.log(existingProduct, "exxx pro");
            if (existingProduct) return res.json({ error: "Product already in cart!" })

            const cart = await Users.findOneAndUpdate({ _id: currentUser }, { $push: { cart: id } }, { new: true }).exec();
            console.log(cart, "caaaaaaaaaart");
            return res.json({ success: true, cart })
        } else {
            return res.json({ error: "Product not found!" })
        }
    } catch (err) {
        console.log(err);
        return res.json({ error: "Internal server error!" })
    }
}
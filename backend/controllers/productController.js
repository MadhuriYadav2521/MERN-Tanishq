import Products from "../modals/productModal.js"
import Users from "../modals/userModal.js"

export const addProduct = async (req, res) => {
    try {
        const { productName, price, productImg,category } = req.body.productData
        const {userId} = req.body;
        console.log(req.body, "bodyyyy");

        if(!userId) return res.json({error: "Seller Id is required!"})
        const user = await Users.findOne({_id: userId}).exec();
        if(!user) return res.json({error: "User not found!"})

        if(user.role !== "seller") return res.json({error: "You are not allowed to add product!"})

        if (!productName || !price || !productImg || !category) return res.json({ error: "Please fill all the fields!" });

        const existingProduct = await Products.findOne({ productName, sellerId : userId }).exec();
        console.log(existingProduct, "exxx");
        if (existingProduct) return res.json({ error: "Product already exist!" });

        const product = new Products({
            productName, price, productImg, category, sellerId: user._id
        });
        await product.save();
        return res.json({ success: true, product });
    } catch (err) {
        console.log(err);
        return res.json({ error: "Internal server error!" })
    }
}

export const getAllProducts = async (req,res) =>{
    try {
        const product = await Products.find({}).exec();
        console.log(product);
        if(product){
            return res.json({success: true, product})
        }else{
            return res.json({error: "Products not found!"})
        }
    } catch (err) {
        console.log(err);
        return res.json({error: "Internal server error!"})
    }
}

export const getSingleProduct = async (req,res) =>{
    try {
        const id = req.params.id
        if(!id) return res.json({error: "Product id is required!"})
        const product = await Products.findOne({_id: id}).exec();
        console.log(product);
        if(product){
            return res.json({success: true, product})
        }else{
            return res.json({error: "Product not found!"})
        }
    } catch (err) {
        console.log(err);
        return res.json({error: "Internal server error!"})
    }
}

export const sellerAllProducts = async (req,res) =>{
    try {
        const {sellerId} = req.body;
        if(!sellerId) return res.json({error: "Seller id is required!"})

        const seller = await Users.findOne({_id: sellerId}).exec();
        if(!seller) return res.json({error: "Seller not found!"});

        const product = await Products.find({sellerId :sellerId }).exec();
        if(product){
            return res.json({success: true, product})
        }else{
            return res.json({error: "Products not found!"})
        }
    } catch (err) {
        console.log(err);
        return res.json({error: "Internal server error!"})
    }
}

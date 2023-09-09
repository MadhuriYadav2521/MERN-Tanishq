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


export const getUpdateProduct = async (req, res) => {
    try {
        const { pid } = req.params;
        console.log(pid, "pid");
        if (!pid) return res.json({ error: "Product id is required!" })
        const product = await Products.findById({ _id: pid });
        console.log(product, "product");
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        return res.json({ success: true, product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



export const updateProduct = async (req, res) => {
    try {
        const pid = req.params.pid
        const{productName, category, price,productImg} = req.body.productData;

        if (!pid) return res.json({ error: "Product id is required!" })
        if(!productName || !category || !price || !productImg) return res.json({error: "All fields are mandatory!"})
        console.log(pid,productName, category, price,productImg,"productName, category, price,productImg");

        const product = await Products.findOneAndUpdate({ _id: pid },{productName, category, price, productImg},{new: true}).exec();
        console.log(product,"updated product");

        if (product) {
            return res.json({ success: true, product })
        } else {
            return res.json({ error: "Product not found!" })
        }
    } catch (err) {
        console.log(err);
        return res.json({ error: "Internal server error!" })
    }
}

export const deleteProduct = async (req,res) =>{
    try {
        const {productId} = req.body;
        console.log(productId,"PPPid");
        if(!productId) return res.json({error: "Product id is mandatory!"});

        const isProduct = await Products.findOne({_id: productId}).exec();
        if(!isProduct) return res.json({error: "Product not found!"})

        const products = await Products.findOneAndDelete({_id:productId},{new:true}).exec();
        if(products) {
            return res.json({success: true, products})
        }else{
            return res.json({error: "Error while deleting product!"})
        }
    } catch (err) {
        console.log(err);
        return res.json({error:"Internal server error!"})
    }
}
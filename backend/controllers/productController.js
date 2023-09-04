import Products from "../modals/productModal.js"

export const addProduct = async (req, res) => {
    try {
        const { productName, price, productImg } = req.body.productData
        console.log(req.body, "bodyyyy");
        if (!productName || !price || !productImg) return res.json({ error: "Please fill all the fields!" });

        const existingProduct = await Products.findOne({ productName }).exec();
        console.log(existingProduct, "exxx");
        if (existingProduct) return res.json({ error: "Product already exist!" });

        const product = new Products({
            productName, price, productImg
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

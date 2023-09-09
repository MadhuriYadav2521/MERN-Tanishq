import express from "express";
import { addProduct, deleteProduct, getUpdateProduct, sellerAllProducts, updateProduct } from "../controllers/productController.js";

const sellerRoute = express.Router();

sellerRoute.post('/addProduct',addProduct)
sellerRoute.post('/sellerAllProducts',sellerAllProducts)
sellerRoute.get('/getUpdateProduct/:pid',getUpdateProduct)
sellerRoute.put('/updateProduct/:pid',updateProduct)
sellerRoute.post('/deleteProduct',deleteProduct)








export default sellerRoute;
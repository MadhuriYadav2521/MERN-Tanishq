import express from "express";
import { addProduct, getAllProducts, getSingleProduct } from "../controllers/productController.js";

const productRoute = express.Router();

productRoute.post('/addProduct',addProduct)
productRoute.get('/getAllProducts',getAllProducts)
productRoute.get('/getSingleProduct/:id',getSingleProduct)




export default productRoute;
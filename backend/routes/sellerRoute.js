import express from "express";
import { addProduct, sellerAllProducts } from "../controllers/productController.js";

const sellerRoute = express.Router();

sellerRoute.post('/addProduct',addProduct)
sellerRoute.post('/sellerAllProducts',sellerAllProducts)








export default sellerRoute;
import express from "express";
import { addProduct } from "../controllers/productController.js";

const sellerRoute = express.Router();

sellerRoute.post('/addProduct',addProduct)


export default sellerRoute;
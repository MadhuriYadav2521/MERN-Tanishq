import express from "express";
import { addProduct } from "../controllers/productController.js";

const adminRouter = express.Router();

adminRouter.post('/addProduct',addProduct)


export default adminRouter;
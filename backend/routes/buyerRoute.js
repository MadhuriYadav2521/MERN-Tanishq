import express from "express";
import { addToCart, getCartProduct, removeFromCart } from "../controllers/userController.js";

const buyerRouter = express.Router();

buyerRouter.post('/addToCart',addToCart)
buyerRouter.post('/getCartProduct',getCartProduct)
buyerRouter.post('/removeFromCart',removeFromCart)




export default buyerRouter;



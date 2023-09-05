import express from "express";
import { addToCart, buyNow, getCartProduct, getOrderHistory, removeFromCart } from "../controllers/userController.js";

const buyerRouter = express.Router();

buyerRouter.post('/addToCart',addToCart)
buyerRouter.post('/getCartProduct',getCartProduct)
buyerRouter.post('/removeFromCart',removeFromCart)
buyerRouter.post('/buyNow',buyNow)
buyerRouter.post('/getOrderHistory',getOrderHistory)




export default buyerRouter;



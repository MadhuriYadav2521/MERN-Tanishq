import express from "express";
import { addToCart } from "../controllers/userController.js";

const buyerRouter = express.Router();

buyerRouter.post('/addToCart',addToCart)


export default buyerRouter;
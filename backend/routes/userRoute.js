import express from "express";
import { CurrentUser, Login, Register, addToCart } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post('/register',Register)
userRoute.post('/login',Login)
userRoute.post('/currentUser',CurrentUser)
userRoute.post('/addToCart/:id',addToCart)




export default userRoute;
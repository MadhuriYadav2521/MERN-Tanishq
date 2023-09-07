import express from "express";
import { CurrentUser, Login, Register, addToCart } from "../controllers/userController.js";
import { getAllProducts, getSingleProduct } from "../controllers/productController.js";
import sellerRoute from "./sellerRoute.js";
import buyerRouter from "./buyerRoute.js";

const router = express.Router();

router.post('/register',Register)
router.post('/login',Login)
router.post('/currentUser',CurrentUser)
router.post('/addToCart/:id',addToCart)

router.use('/seller',sellerRoute)
router.use('/buyer',buyerRouter)
router.get('/getAllProducts',getAllProducts)
router.get('/getSingleProduct/:id',getSingleProduct)


export default router;
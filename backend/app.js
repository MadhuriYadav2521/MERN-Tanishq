import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import mongoose from "mongoose";
import productRoute from "./routes/productRoute.js";
dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(userRoute);
app.use(productRoute);


mongoose.connect(process.env.CONNECTION)
.then(()=> console.log("Mongodb Connected!"))
.catch((err)=> console.log(err));


const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`working on port ${port}`));

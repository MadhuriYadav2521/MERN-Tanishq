import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    productName: String,
    price : Number,
    productImg : String
}, { timestamps: true }
);

export default mongoose.model("Products", productSchema);
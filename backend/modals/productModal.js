import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    productName: String,
    price : Number,
    productImg : String,
    category : String,
    sellerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
}, { timestamps: true }
);

export default mongoose.model("Products", productSchema);
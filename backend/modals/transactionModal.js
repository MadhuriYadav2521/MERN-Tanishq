import mongoose from "mongoose";
import { Schema } from "mongoose";

const transactionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Users", 
        required: true,
    },
    cart: [{
        type: Schema.Types.ObjectId,
        ref: "Products", 
        required: true,
    }],
    totalPrice: {
        type: Number,
        required: true,
    },
    totalProducts: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => date.toLocaleDateString(), // Use this getter function to display only date not time
    },
})

export default mongoose.model("Transactions", transactionSchema)
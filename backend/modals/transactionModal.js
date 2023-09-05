import mongoose from "mongoose";
import { Schema } from "mongoose";

const transactionSchema = new Schema({
    transaction : [ ]
})

export default mongoose.model("Transactions", transactionSchema)
import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    userName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    role :{
        type: String,
        enum: ['buyer', 'seller', 'admin'],
        default: 'buyer'
    },
    cart : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
    }]
}, {timestamps: true}
)

export default mongoose.model("Users",userSchema);
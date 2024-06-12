import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    contact: {
        type: String,
        required: true 
    },
    gender: {
        type:  Number,
        required: false,
        default:0,
        Comment: "0 = male, 1 = female"
    },
    role_id: {
        type: String,
        required: true 
    },
    password:{
        type: String,
        required: true 
    },
    status: {
        type: Boolean,
        required: true,
        default: true ,
        Comment: "0= Inactive, 1= Active"
    },
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});

const Users = mongoose.models.Users || mongoose.model("Users", userSchema )

export default Users;
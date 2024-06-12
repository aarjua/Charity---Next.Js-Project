import mongoose, { Schema } from "mongoose";

const roleSchema = new Schema({
    role: {
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

const Roles = mongoose.models.Roles || mongoose.model("Roles", roleSchema )

export default Roles;
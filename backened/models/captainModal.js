import mongoose from "mongoose";
const captainSchema = new mongoose.Schema({
    firstName:{
        type:String,
    required:true    
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },
    vehicleDetails:{
        vehiclePlate:{
            type:String,
            required:true
        },
        vehicleColor:{
            type:String,
            required:true,
        },
        vehicleCapacity:{
            type:Number,
            required:true
        },
        vehicleType:{
            type:String,
            required:true
        }
    }  
})
const cpatianModal = mongoose.models.captain || mongoose.model('captain', captainSchema)
export default cpatianModal
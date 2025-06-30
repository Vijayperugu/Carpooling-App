import mongoose from "mongoose";


const rideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        name: 'user.name',
        required: true
    },
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'captain',
    },
    pickup: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    fare: {
        type: Number,
        required: true,
    },

    status: {
        type: String,
        enum: [ 'pending', 'accepted', 'riding' ,'completed', 'cancelled' ],
        default: 'pending',
    },

    duration: {
        type: Number,
    }, // in seconds

    distance: {
        type: Number,
    }, // in meters

    paymentID: {
        type: String,
    },
    orderId: {
        type: String,
    },
    signature: {
        type: String,
    },
    otp: {
        type: String,
        select: false,
        required: true,
    },
})
const rideModal = mongoose.models.ride || mongoose.model('ride',rideSchema)
 export default rideModal;

import Ride from "../models/ride.js";

// Create a new ride
export const createRide = async (req, res) => {
  try {
    const ride = new Ride(req.body);
    const savedRide = await ride.save();
    await savedRide.populate("user", "name");
    req.app.get("io").emit("newRide", savedRide);
    res.status(201).json({ success: true, ride: savedRide });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
//start Ride and otp verification

export const startRide = async (req, res) => {
  const { rideId, otp } = req.body;
  try {
    const ride = await Ride.findById(rideId).select('+otp').populate("user", "name");
    if (!ride) return res.status(404).json({ success: false, message: "Ride not found" });
    if (ride.otp !== otp) return res.json({ success: false, message: "Invalid OTP" });
    ride.status = "accepted";
    await ride.save();
    res.json({ success: true, ride });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all rides
export const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find().populate("user").populate("captain");
    res.json({ success: true, rides });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a ride by ID
export const getRideById = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.id).populate("user","name").populate("captain", "name");
    if (!ride) {
      return res.status(404).json({ success: false, message: "Ride not found" });
    }
    res.json({ success: true, ride });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a ride
export const updateRide = async (req, res) => {
  try {
    const ride = await Ride.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ride) {
      return res.status(404).json({ success: false, message: "Ride not found" });
    }
    res.json({ success: true, ride });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a ride
export const deleteRide = async (req, res) => {
  try {
    const ride = await Ride.findByIdAndDelete(req.params.id);
    if (!ride) {
      return res.status(404).json({ success: false, message: "Ride not found" });
    }
    res.json({ success: true, message: "Ride deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
import express from "express";
import {
  createRide,
  getAllRides,
  getRideById,
  updateRide,
  deleteRide,
  startRide,
  confirmRideByCaptain
} from "../controllers/rideControllers.js";

const router = express.Router();

router.post("/", createRide);           // Create a ride
router.get("/", getAllRides);           // Get all rides
router.get("/:id", getRideById);        // Get ride by ID
router.put("/:id", updateRide);         // Update ride
router.delete("/:id", deleteRide); 
router.post('/start-ride', startRide); 
router.post("/confirm", confirmRideByCaptain); 
export default router;
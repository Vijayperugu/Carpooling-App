import express from "express";
import {
  createRide,
  getAllRides,
  getRideById,
  updateRide,
  startRide,
  confirmRideByCaptain,
  setRideToRiding,
  setRideToCompleted
} from "../controllers/rideControllers.js";

const router = express.Router();

router.post("/", createRide);          
router.get("/", getAllRides);         
router.get("/:id", getRideById);        
router.put("/:id", updateRide);         
// router.delete("/:id", deleteRide); 
router.post('/start-ride', startRide); 
router.post("/confirm", confirmRideByCaptain); 
router.post('/set-riding',setRideToRiding);
router.post('/complete-ride',setRideToCompleted);

export default router;
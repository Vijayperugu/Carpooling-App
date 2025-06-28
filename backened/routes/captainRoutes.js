import express from "express";
import { loginCaptain,registerCaptain } from "../controllers/captainControllers.js";

const captainRoutes = express.Router();


captainRoutes.post('/captain/register',registerCaptain);
captainRoutes.post('/captain/login',loginCaptain);

export default captainRoutes;



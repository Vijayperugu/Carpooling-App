import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import captainRoutes from "./routes/captainRoutes.js" 
import rideRoutes from "./routes/rideRoutes.js";
import { Server} from 'socket.io';
import {createServer} from 'http';

 const app = express();
const server = createServer(app);
const io = new Server(server,{
  cors:{
    origin: "*",
    methods: ["GET", "POST"],
  }
});

io.on("connection", (socket) => {
  socket.on("joinRoom", (userId) => {
    socket.join(userId);
  });
});

app.set("io",io);
 const port = process.env.PORT || 4000;
 connectDB();

 app.use(cors())
 app.use(express.json())


 app.use('/api/user',userRouter)
 app.use('/api',captainRoutes)
 app.use('/api/rides', rideRoutes);
 


  app.get('/',(req,res)=>{
    res.send("API WORKING")
  })

 server.listen(port,()=>{
    console.log("Server is running")
  })

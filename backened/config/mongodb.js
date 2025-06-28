import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log("DataBase Connection Established");
        
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/login`)


}
export default connectDB;
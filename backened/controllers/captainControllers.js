import jwrc from 'jsonwebtoken';
import dotenv from 'dotenv';
import captainModel from '../models/captainModal.js';
import bcrypt from 'bcrypt';
import validator from 'validator';
dotenv .config();

const createToken =(id)=>{
    return jwrc.sign({id},process.env.JWT_SECRET);

}

const loginCaptain = async (req,res)=>{

    try {
        const {email,password}=req.body;

        const captain = await captainModel.findOne({email});
        if(!captain){
            return res.json({sucess:false,
                message:"Captain not found"
            });
        }
        if(password.length<6){
            return res.json({sucess:false,
                message:"Enter strong password"
            })
        }
        const isMatch = await bcrypt.compare(password, captain.password);
        if(isMatch){
            const token = createToken(captain._id);
            return res.json({
                message:"Login Successful",
                sucess:true,
                token,
                captainId:captain._id
            })
        }else{
            return res.json({
                message:"Incorrect Password",
                success:false
            })
        }
        
    } catch (error) {
        return res.json({
            sucess:false,
            message:error.message
        })
        
    }

}
const registerCaptain = async (req,res)=>{
    try {
        const {firstName,lastName,email,password,vehicleDetails}=req.body;

        const exist = await captainModel.findOne({email});
        if(exist){
            return res.json({
                sucess:true,
                message:"Mail Already Exist"
            })
        }
        if(!validator.isEmail(email)){
            return res.json({
                sucess:false,
                message:"Invalid Email Address"
            })
        }
        if(password.length<6){
            return res.json({
                sucess:false,
                message:"Enter strong password"
            })
        }

        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(password,salt);

        const newCaptain = new captainModel({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            vehicleDetails
        })

        const captain = await newCaptain.save();

        const token = createToken(captain._id);
        return res.json({
            message:"Account created Successfully",
            sucess:true,
            token,
            captainId:captain._id
        })



        
    } catch (error) {
        return res.json({
            sucess:false,
            message:error.message
        })
        
    }
}
export {loginCaptain,registerCaptain};

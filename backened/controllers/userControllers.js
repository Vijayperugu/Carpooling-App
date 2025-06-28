import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userModal from "../models/userModela.js";
dotenv.config();
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModal.findOne({ email });
    console.log(user);

    if (!user) {
      return res.json({ success: false, message: "user not found" });
    }
    if (password.length < 6) {
      return res.json({ success: false, message: "Enter strong password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, message: "Login Successful", token,
      userId: user._id
       });
    } else {
      res.json({ success: false, message: "Incorrect Password" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exist = await userModal.findOne({ email });
    if (exist) {
      return res.json({ success: true, message: "User Already Exist" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid Email Address" });
    }
    if (password.length < 0) {
      return res.json({ success: false, message: "Enter strong password" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModal({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user.id);

    res.json({ success: true, message: "Account created Successfully", token ,
      userId: user._id
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export { loginUser, registerUser };

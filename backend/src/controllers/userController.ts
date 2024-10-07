import userModel from "../models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { Request, Response } from "express";

// login user
const loginUser = async ( req: Request, res: Response) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});

        if(!user){
            res.status(400).json({success:false, message:"User Doesn't exist"});
            return;
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(400).json({success:false,message:"Invalid credentials"});
            return;
        }

        const token = createToken(user._id);
        res.status(200).json({success:true,token});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Server Error"})
    }
}

const createToken = (id: string) => {
    return jwt.sign({id}, process.env.JWT_SECRET!) // use definite assignment assertion to make typescript aware that the "secret" is certainly there by using an '!'.
}

// register user
const registerUser = async ( req: Request, res: Response)=> {
    const { name, email, password} = req.body;
    try {
        // checking is user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            res.status(400).json({ success: false, message: "User already exists" });
            return;
        }

        //  validating email format & strong password
        if(!validator.isEmail(email)) {
            res.status(400).json({success:false,message:"Please enter a valid email"});
            return;
        }

        if(password.length<8){
            res.status(400).json({success: false, message:"Please enter a strong password"});
            return;
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.status(201).json({success: true,token})
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message:"Error"})
        return;
    }
}

export { loginUser, registerUser};

import { hashSync } from "bcryptjs";
import User from "../model/UserModel.js";

export const getAllUsers=async(req,res)=>{
    try{
        const allusers=await User.find()
        if(allusers.length){
            res.status(200).json(allusers);
        }
    }catch(e){
        res.status(500).json(e)
    }
}

export const getUserById=async(req,res)=>{
    const id=req.params.id;
    try{
        const user=await User.findById(id);
        if(user){
           return  res.status(200).json(user)
        }
        else {
            return res.status(404).json("User Is Not Found")
        }
    }catch(e){
        res.status(500).json(e.message)
    }
}

export const updateUser=async(req,res)=>{
    try{
        const id=req.user._id;
        
        if(req.body.password){
            req.body.password=hashSync(req.body.password,10)
        }
        const updatedUser= await User.findOneAndUpdate(id,{...req.body},{returnOriginal:false})
       
        if(updatedUser){
            res.status(200).json(updatedUser)

        }
    }catch(e){
        res.status(500).json(e.message)
    }
}
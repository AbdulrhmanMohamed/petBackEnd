import bcrypt from 'bcryptjs'
import User from "../model/UserModel.js";

export const getAllUsers=async(req,res)=>{
    try{
        const allusers=await User.find()
        if(allusers.length){
           const filteredUser= allusers.filter(user =>user.email!="admin@admin.com")
            res.status(200).json(filteredUser);
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
            req.body.password=bcrypt.hashSync(req.body.password,10)
        }
        const updatedUser= await User.findByIdAndUpdate(id,{...req.body})
        if(updatedUser){
            res.status(200).json(updatedUser)

        }
    }catch(e){
        res.status(500).json(e.message)
    }
}

export const deleteUser=async(req,res)=>{
    
    const {id}=req.query;
    console.log('++++++++++++++++++++++++++++++++++++++++++++deletUser')
    console.log('========================================================')
    console.log('idQuery',req.query)
    try{
        const deletedUser=await User.findByIdAndDelete(id)
        if(deletedUser){
            console.log('deletedUser',deletedUser)
            res.status(200).json('User Deleted Successfully ');
        }

    }
    catch(e){
        res.status(500).json(e)
    }
   
}
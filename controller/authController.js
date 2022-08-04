
import User from "../model/UserModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();


export const Register=async(req,res)=>{
    
    
    const {
        userName,email,password,location,price,services,currency,rating,image,isAdmin
    }=req.body;
   
    const user=await User.findOne({email});
   
    if(user)
    res.status(400).json('user Already Exist');
     else{
    try{
           

            const newUser=new User({
               
                userName,email,password:bcrypt.hashSync(password,10),
                location,price,services,currency,rating,image,isAdmin
            })

            
            if(email=='admin@admin.com'){
                console.log('what is happening',email,newUser.isAdmin)
                newUser.isAdmin=true;

            }
            await newUser.save();
             res.status(200).json(newUser);
        }catch(e){
            res.status(500).json(e)
        }

    }
}


export const Login=async(req,res)=>{
   
    const {email,password,userName}=req.body
    try{
        const user=await User.findOne({email});
        
        
        if(user){
            


            if(bcrypt.compareSync(password,user.password)){
                // console.log('user is exist')
                const token=jwt.sign({id:user._id},process.env.SECRET,{expiresIn:'30d'})
                

                 res.status(200).json({
                    userName,
                    email,password,token,
                    _id:user._id,
                   
                 })
            }
            else{
                res.status(400).json('Inivlaid Email Or Password')
            }
        }

            
        else {
            return res.status(400).json('Invalid Email Or Password');   
        }
        
    }catch(e){
        res.status(500).json(e)
    }
}

export const userProfile=async(req,res)=>{
    console.log('++++++++++++++++++++++++++++++userProfile')
    console.log('requser',req.user)
    if(req.user){
        
        res.status(200).json(req.user);
    }
}
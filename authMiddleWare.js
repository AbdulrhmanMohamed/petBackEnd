import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from './model/UserModel.js';
dotenv.config();
export const AuthMiddleWare=async(req,res,next)=>{
    // console.log('reqheader',req.headers)

    const token=req.headers.authorization;
    console.log('==============================================================================')
    console.log('from Mdiddle Ware')
    console.log('sentToken',token)
    if(token && token.startsWith('Bearer')){
        let splitToken=token.split(' ')[1];
        let verifyToken;
        try{
           
            if(splitToken){

                
                // console.log('genToken',token)
                 verifyToken= jwt.verify(splitToken,process.env.SECRET)
                //  console.log('verfiyId', verifyToken.id)
                 req.user=await User.findById(verifyToken.id)
                 
                console.log('calling Next')
                 next()
            }
        }catch(e){
            res.status(404).json('InValid Token')
        }
        // console.log('token',verifyToken)
     
    }
    else{
        res.status(401);
        res.json('unAuthorized , no Token')
    }
    // if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        
    //     const token=req.headers.authorization.split(' ')[1];
    //     const {id}=jwt.verify(token,process.env.SECRET)
    // console.log('data',id)
    // try{
    //     req.user= await User.findById(id);
    //     // console.log('user',req.user._id)
    //     if(req.user){
    //         console.log('calling Next')
    //         next();
    //     }
    //     else{
    //         res.status(400).json('unauthorized User');
    //     }
        
    // }catch(e){
    //     res.status(500).json(e);
    // }

    // }


    
    
}
import User from "../model/UserModel.js";

export const searchRes=async(req,res)=>{
    const {service ,location}=req.query;
    try{
        const searchRes=await User.find({location:location})
        console.log('searchRes SoFar',searchRes)
        if(searchRes.length){
           let searchByService= searchRes.filter((item,index)=>item.services.includes(service))
            if(searchByService.length){

                res.status(200).json(searchByService)
              
               
            }
            else{
                res.status(400).json('Sorry No Matched Service for Your Need')
            }
        }
        else{
            res.status(400).json('nothing Match Your Need')
        }

    }catch(e){
        res.status(500).json(e)
    }
}


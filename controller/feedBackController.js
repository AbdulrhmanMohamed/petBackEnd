import FeedBack from "../model/FeedBackModel.js"

export const creaateFeedBack=async(req,res)=>{
    
   
    try{
        
        
        

            const newFeedBack=new FeedBack({
                ...req.body,postedId:req.user._id
            })
           await newFeedBack.save();
           res.status(200).json(newFeedBack)
        

    }catch(e){
        res.status(500).json(e.message)
    }
}


export const getAllFeedBack=async(req,res)=>{
    try{
        const allFeedBack=await FeedBack.find();
        if(allFeedBack.length){
            res.status(200).json(allFeedBack)
        }
    }catch(e){
        res.status(500).json(e.message)
    }
}


export const getFeedBackById=async(req,res)=>{
    const userId=req.params.id;
    
    try{
        const feedBack=await FeedBack.find({userId});
        if(feedBack){
            
            res.status(200).json(feedBack)
        }
        else{
            res.status(404).json('FeeedBack Not Found')
        }

    }catch(e){
        res.status(500).json(e.message)
    }
}

export const updateFeedBack=async(req,res)=>{
    const id=req.params.id;
    try{
        const updatedFeedBack=await FeedBack.findByIdAndUpdate(id,req.body,{returnOriginal:false})
        if(updatedFeedBack){
            res.status(200).json(updatedFeedBack);
        }
        else{
            res.status(404).json('Cant Find Post To Update')
        }
    }catch(e){
        res.status(500).json(e.message)
    }
}

export const getUserFeedBacks=async(req,res)=>{
    const userId=req.user._id;
    try{
        const userFeedBacks=await FeedBack.find({userId});
        if(userFeedBacks.length){
            res.status(200).json(userFeedBacks)
        }
        else{
            res.status(400).json('No FeedBack Yet')
        }
    }catch(e){
        res.status(500).json(e.message)
    }
}




import mongoose from "mongoose";
const FeedBackShema=mongoose.Schema({
    postedId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
    },
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
   
    rating:{
        type:Number,
        default:3,
    }
},{timestamps:true})

const FeedBack=mongoose.model('FeedBack',FeedBackShema)
export default FeedBack;
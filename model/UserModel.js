import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    services:{
        type:Array,
        default:[],
    },
    location:{
        type:String,
        default:'',
    },
    currency:{
        type:String,
        default:'',

    },
    price:{
        type:Number,
        default:0,
    },
    image:{
        type:String,
        default:'',
    },
    rating:{
        type:Number,
        default:3,
    },
    desc:{
        type:String,
        default:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam. Perspiciatis doloremque nesciunt, autem illum cupiditate eum error!"
    },
   
    isAdmin:{
        type:Boolean,
        default:false,
    }
},
{timestamps:true}
)

const User= mongoose.model('User',userSchema)
export default User;
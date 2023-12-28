import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
//hooks->pre->pre middlewares func are exceuted one after another,when each middleware calls 'next'

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true//searchable
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,//cloudinary url
        required:true,
    },
    password:{
        type:String,
        required:[true,'Password is a required field']
    },
    coverImage:{
        type:String,//cloudinary url
    },
    refreshToken:{
        type:String
    },
    watchHistory:[
        {
        type:[Schema.Types.ObjectId],
        ref:"Video"
        }
    ],    

},{timestamps:true})

//bcrypt->hashs the passwords
//jwt-json webtoken-is a beared token

userSchema.pre("save",async function(next){
    // this.password=bcrypt.hash(this.password,10);
    // next();
    if(!this.isModified("password")) return next();
    
    this.password=await bcrypt.hash(this.password,10);
    next();
})//context is imp here

//methods injection
userSchema.methods.isPasswordcorrect=async function
(password){
    return await bcrypt.compare(password,this.password);

}
userSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            username:this.username,
            email:this.email,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            username:this.username,
            email:this.email,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

export const User=mongoose.model("Users",userSchema);
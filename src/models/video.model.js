import mongoose,{Schema} from "mongoose"
//mongoose aggreate functions
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"//plugin

const videoSchema=new Schema({
    videoFile:{
        type:String,//url
        required:true,
        trim:true,
        // index:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
        
    },
    title:{
        type:String,//url
        required:true,
        index:true
    },
    thumbnail:{
        type:String,
        required:true,
        
    },
    duration:{
        type:Number,//url
        required:true,
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    videoUrl:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    category:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    tags:{
        type:[String],
        required:true,
        trim:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    likes:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    dislikes:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    comments:[
        {
            text:String,
            postedBy:{
                type:Schema.Types.ObjectId,
                ref:"User"
            }
        }
    ]
},{timestamps:true})

videoSchema.plugin(MongooseAggregatePaginate)

export const Video=mongoose.model("Video",videoSchema)
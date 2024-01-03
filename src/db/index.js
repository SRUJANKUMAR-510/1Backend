import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";//imp extension 
//mongo gives you an return object

const connectDB=async () => {
    //console.log(process.env.MONGODB_URI+'QQQ');
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME},{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }`)
        console.log('\n MongoDB connected !! DB HOST: ${connectInstance.connection.host}');//console.log() needed
    }
    catch(error)
    {
        console.log("MONOGODB connection FAILED",error);
        //in node,process access
        process.exit(1);
        throw error;
    }
}

export default connectDB; 
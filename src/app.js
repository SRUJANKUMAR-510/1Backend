//in js,import can be done using 2 menthods->
//commom js and module js
//we prefer module js
//--watch option in node for servers
//nodemon-for server restart purpose
//we use dev-dep->only in dev not in production
//API handling->req.params,body,cookies

//app.use()->for middlewares and configuration changes

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./db/index.js ";
import dotenv from "dotenv";
// dotenv.config({
//     path:'./env'
// });
dotenv.config();


//console.log(process.env.PORT+'qq');

//usng this parser im accessing cookies from users' browser to the server and performing CRUD operations


const app = express();
const PORT=8000;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true

}))

//for best and security practice
app.use(express.json({limit:"16kb"}));//accepting

app.use(express.urlencoded({extended:true,limit:"16kb"}));//for url handling

app.use(express.static("public"));//for storing public assests

app.use(cookieParser());

connectDB();

//routes import
import userRouter from "./routes/user.routes.js"
import { connect } from "mongoose";

//routes declaration
app.use("/api/v1/users",userRouter)//we hve to get middleware
//app.use("/",userRouter)
// app.get('/api',(req,res)=>{
//     res.send("Hello World");
// })


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//http://localhost:8000/api/v1/users/....anything

//export{app};


//file uploader-utility and middleware

//temp store at local server
//multer->file uploader
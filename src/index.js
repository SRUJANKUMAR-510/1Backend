//try cache wrap and promises->db collection
// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import express from "express";
//import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js ";//imp problem

dotenv.config({
    path:'./env'
})

//As early asap in your app,import and config dotenv

//1st appr->effy and function appr and await if db is at diff continent
const app = express();

// // function connectDB(){}

// // connectDB()
// //effy
// ;(async ()=>{
//     try{
//         await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
//         app.on("error",(error)=>{
//             console.log("ERROR:",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log('App is listening on port ${process.env.PORT}');
//         })
//     }
//     catch(error)
//     {
//         console.log("ERROR:",error)
//         throw err
//     }
// })()

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`App is listening on port ${process.env.PORT || 8000}`);
    });
})
.catch((err)=>{
    console.log("MongoDB connection failed !!!",err)
})

//whenever a async member completes it returns a promise
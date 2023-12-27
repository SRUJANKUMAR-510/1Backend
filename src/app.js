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
//usng this parser im accessing cookies from users' browser to the server and performing CRUD operations

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true

}))

//for best and security practice
app.use(express.json({limit:"16kb"}));//accepting

app.use(express.urlencoded({extended:true,limit:"16kb"}))//for url handling

app.use(express.static("public"))//for storing public assests

app.use(cookieParser()) 

export{app}
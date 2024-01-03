import {Router} from "express";
import {registerUser} from "../controllers/user.controller.js";

const router = Router();

// router.route("/register").post(registerUser);
router.post('/register',registerUser,);
router.get('/register',(req,res)=>{
    //res.send("Registered");
    res.status(500).json({a:1});
});
//router.routes("/login").post(login)

export default router;
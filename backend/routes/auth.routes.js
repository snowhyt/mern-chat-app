import express from "express";
const router = express.Router();

router.get("/login", (req, res) => {    
    //route login
    res.send("Login Route");
});

router.get("/logout", (req, res) => {    
    //route logout
    res.send("Logout Route");
});

router.get("/signup", (req, res)=>{
    //route signup
    res.send("Signup Route")
})


export default router;
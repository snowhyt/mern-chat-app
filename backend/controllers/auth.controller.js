import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const{fullname, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error: "Password do not match"});
        }

        const user = await User.findOne({username});
        
        if(user){
            return res.status(400).json({error: "User already exists"});}


    //HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    //profile picture generator by gender with avatar api
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    //create new user
    const newUser = new User({
        fullname,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    });

    //save user and respond
   if(newUser){

    //generate token and set cookie (JWT_TOKEN)
    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic
    });

   } else{
         res.status(400).json({error: "Invalid User Data"});
   }

    } catch (error) {
       console.log("Error on signup controller", error.message);
       res.status(500).json({error: "Internal Server Error"}); 
    }
};



export const login = (req, res) => {
    res.send("Login Route");
};  

export const logout = (req, res) => {
    res.send("Logout Route");
};
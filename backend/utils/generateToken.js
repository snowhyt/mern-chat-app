import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET, {
        expiresIn: "15d",
    });


    res.cookie("jwt", token, {
        httpOnly: true, //to prevent XSS attack cross site scripting attacks
        maxAge: 15*24*60*60*1000, //15 days (Milliseconds format) 
        sameSite: "strict", //to prevent CSRF attack cross site request forgery attacks
        secure: process.env.NODE_ENV === "production" ? true : false, //to prevent MITM attack
    });
};

export default generateTokenAndSetCookie;
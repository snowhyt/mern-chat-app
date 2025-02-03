import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connecToMongoDB.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {    
    //root route
    res.send("Its working");
});


app.use("/api/auth",authRoutes);


app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});

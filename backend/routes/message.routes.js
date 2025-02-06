import express from "express";
import { sendMessage } from "../controllers/message.controller.js";


const router = express.Router();

router.post("/send/:id", sendMessage); //send message to a user


export default router;


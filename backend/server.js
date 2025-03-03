import express from "express";
import dotenv from "dotenv";

import authroutes from "./routes/authroutes.js";
import messageroutes from "./routes/messageroutes.js";
import userroutes from "./routes/userroutes.js";

import connectToMongoDB from "./database/connectToMongodb.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json()); // before route
app.use(cookieParser());

app.use("/api/auth", authroutes);
app.use("/api/messages", messageroutes);
app.use("/api/users", userroutes);

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
    connectToMongoDB();
})
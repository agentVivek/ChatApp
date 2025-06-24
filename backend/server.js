import express from "express";
import dotenv from "dotenv"; 
import path from "path";

import authroutes from "./routes/authroutes.js";
import messageroutes from "./routes/messageroutes.js";
import userroutes from "./routes/userroutes.js";

import connectToMongoDB from "./database/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import {app, server} from "./socket/socket.js" ;

dotenv.config();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json()); 
app.use(cookieParser());

app.use("/api/auth", authroutes);
app.use("/api/messages", messageroutes);
app.use("/api/users", userroutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
    connectToMongoDB();
})

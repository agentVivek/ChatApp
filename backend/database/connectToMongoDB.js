import mongoose from "mongoose";

const connectToMongoDB = async ()=>{
    try{
        mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected To MongoDB");
    } catch(err){
        console.log("Error Connecting to MongoDB", err.message);
    }
}

export default connectToMongoDB;
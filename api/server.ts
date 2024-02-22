import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();


// interface ProcessEnv {
//     [key: string]: string | undefined
// }

function handleError(err:unknown){
    console.error("error encountered",err);
}
const connect = async() => {
    try{
        mongoose.connect(process.env.MONGODB_URL!)
        console.log("connection established")
    }

    catch(err:unknown){
        handleError(err);
    }
}



console.log("first message1")
app.listen(8800,()=>{
    connect();
    console.log("backend server running")
})
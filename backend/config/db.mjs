import mongoose from "mongoose";
import { DB_NAME } from "../constants.mjs";

export const connectDb = async() => {
    try{
        const conn = await mongoose.connect(`${process.env.ATLAS_URI}/${DB_NAME}`)
        console.log(`Connected to: ${conn.connection.host}`)
    }catch(err){
        console.log(`Error: ${err.message}`)
    }
}
import { DB_NAME } from "../contants.js";
import mongoose from "mongoose";


const connectDB = async ()=>{

    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log('db connection established:'+connectionInstance.connection.host);
    }catch(err){
        console.log(err);
        process.exit(1);
    }

}

export default connectDB
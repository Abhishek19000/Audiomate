import mongoose from 'mongoose';

export const connectDB= async()=>{
    try{
       const conn= await mongoose.connect(process.env.MONGODB_URI);
       console.log(`Connected to MongoDB ${conn.connection.host }`);
    }
    catch(error)
    {
        console.log("Failed to connect MongoDB "+ error);
        process.exit(1); // 1 is for failure and 0 is for success
    }
}
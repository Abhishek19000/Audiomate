import express from 'express';
import dotenv from 'dotenv';
import {clerkMiddleware} from '@clerk/express';
import { connectDB } from './lib/db.js';
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stat.route.js";


dotenv.config();

const app= express();

app.use(express.json());
app.use(clerkMiddleware()); //this will add auth to req object =>req.auth

const port=process.env.PORT;

app.use("/api/v1/users",userRoutes);
app.use("/api/v1/admin",adminRoutes);
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/songs",songRoutes);
app.use("/api/v1/albums",albumRoutes);
app.use("/api/v1/stats",statRoutes);

app.post("/",(req,res)=>{
    const re11=req.body;

    console.log(re11);

    res.send(re11)
});

app.listen(port,()=>{
    console.log("Server running "+ process.env.PORT);
    connectDB();
});
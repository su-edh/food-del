import express from "express";
import cors from "cors"
import { connectDB } from "./config/db";
import foodRouter from "./routes/foodRoute";
import userRouter from "./routes/userRoute";
import 'dotenv/config'
const app = express();
const port = 4000;

// app config
app.use(express.json())
app.use(cors());

// db connection
connectDB();

// api endpoint
app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads'));
app.use('/api/user',userRouter);
// middleware
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

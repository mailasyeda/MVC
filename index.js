import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./Utils/db";

const app =express();

dotenv.config();

connectDB();
app.use(
    cors({
        origin: "*",
        methods: ["GET" ,"POST" , "PUT" , "DELETE" ],
    }),
);

app.listen(5050, () => {
    console.log("server is running");
});
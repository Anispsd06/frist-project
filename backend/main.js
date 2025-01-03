import connection from "./configs/database.js";
import express from "express";  
import dotenv from "dotenv";
import { readdirSync } from "fs";
import cors from "cors";
dotenv.config;
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;

readdirSync("./routers").map(async (r) => {
    const router = await import('./routers/' + r);
    const splitExt = r.split('.')[0];
    app.use(`/api/${splitExt}`, router.default);
    
});

app.listen (port, ()=>{
    connection;
    console.log(`Server is running on port ${port}`);
})
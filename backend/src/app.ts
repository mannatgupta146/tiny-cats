import express from "express";
import connectDB from "./config/db.ts";

const app = express();

connectDB()

app.get("/", (req, res) => {
    res.send({
        success: true,
        message: "tiny cats backend is running"
    })
})

export default app;
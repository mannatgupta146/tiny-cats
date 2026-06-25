import express from "express";
import connectDB from "./config/db.ts";
import catRouter from "./routes/cat.route.ts";
import aiRouter from "./routes/ai.route.ts";

const app = express();

app.use(express.json());

connectDB()

app.get("/", (req, res) => {
    res.send({
        success: true,
        message: "tiny cats backend is running"
    })
})

// Routes
app.use("/api/cats", catRouter)

app.use("/api/ai", aiRouter)

export default app;
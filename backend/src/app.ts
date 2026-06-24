import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send({
        success: true,
        message: "tiny cats backend is running"
    })
})

export default app;
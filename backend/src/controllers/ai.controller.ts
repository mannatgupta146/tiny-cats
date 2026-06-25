import type { Request, Response } from "express";
import { generateAiResponse } from "../services/gemini.service.ts";

export const askAiController = async (req: Request, res: Response) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({
            success: false,
            message: "Prompt is required",
        });
    }

    try {
        const aiResponse = await generateAiResponse(prompt);

        res.status(200).json({
            success: true,
            message: "AI response generated successfully",
            data: aiResponse,
        });
    } catch (error) {
        console.error("Error generating AI response:", error);
        res.status(500).json({
            success: false,
            message: "Failed to generate AI response",
        });
    }
}
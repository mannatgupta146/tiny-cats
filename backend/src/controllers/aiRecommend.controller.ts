import type { Request, Response } from "express";
import { recommendByAiService } from "../services/aiRecommend.service.ts";

export const recommendByAiController = async (req: Request, res: Response) => {
    const { kidsFriendly, apartmentFriendly } = req.body

    const result = await recommendByAiService(kidsFriendly, apartmentFriendly)

    res.status(200).json({
        success: true,
        message: "AI recommendation generated successfully",
        count: result!.length || 0,
        data: result
    });
} 
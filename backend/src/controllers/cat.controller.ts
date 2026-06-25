import type { Request, Response } from "express";
import { createCatService } from "../services/cat.service.ts";

export const createCatContoller = async (req: Request, res: Response) => {
    let result = await createCatService(req.body);
    res.status(201).json({
        success: true,
        message: "Cat created successfully",
        data: result
    });
}
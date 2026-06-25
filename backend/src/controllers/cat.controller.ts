import type { Request, Response } from "express";
import { createCatService, deleteCatByIdService, getAllCatsService, getCatByIdService, recommendCatsService, searchCatsService, updateCatByIdService } from "../services/cat.service.ts";

// Controller to create a new cat
export const createCatContoller = async (req: Request, res: Response) => {
    let result = await createCatService(req.body);
    res.status(201).json({
        success: true,
        message: "Cat created successfully",
        data: result
    });
}

// Controller to get all cats
export const getAllCatsController = async (req: Request, res: Response) => {
    let result = await getAllCatsService();
    res.status(200).json({
        success: true,
        message: "Cats fetched successfully",
        data: result
    });
}

// Controller to get a cat by ID
export const getCatByIdController = async (req: Request, res: Response) => {
    const result = await getCatByIdService(req.params.id as string);

    res.status(200).json({
        success: true,
        message: "Cat fetched successfully",
        data: result
    });
};

// Controller to update a cat by ID
export const updateCatByIdController = async (req: Request, res: Response) => {
    const result = await updateCatByIdService(
        req.params.id as string,
        req.body
    );

    res.status(200).json({
        success: true,
        message: "Cat updated successfully",
        data: result
    });
};

// Controller to delete a cat by ID
export const deleteCatByIdController = async (req: Request, res: Response) => {
    const result = await deleteCatByIdService(req.params.id as string);

    res.status(200).json({
        success: true,
        message: "Cat deleted successfully",
        data: result
    });
};

// Controller to search cats by name, breed, or color
export const searchCatsController = async (req: Request, res: Response) => {
    const query = req.query.q as string;
    const result = await searchCatsService(query);

    res.status(200).json({
        success: true,
        message: "Cats searched successfully",
        data: result
    });
};

// Controller to recommend cats based on certain criteria
export const recommendCatsController = async (req: Request, res: Response) => {
    const { kidsFriendly, apartmentFriendly } = req.body;
    const result = await recommendCatsService(kidsFriendly, apartmentFriendly);

    res.status(200).json({
        success: true,
        message: "Cats recommended successfully",
        data: result
    });
}
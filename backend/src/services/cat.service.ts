import CatModel from "../models/cat.model.ts"

// Service to create a new cat
export const createCatService = async (payload : object) => {
    return await CatModel.create(payload)
}

// Service to get all cats
export const getAllCatsService = async () => {
    return await CatModel.find();
}

// Service to get a cat by ID
export const getCatByIdService = async (id : string) => {
    return await CatModel.findById(id);
}

// Service to update a cat by ID
export const updateCatByIdService = async (id : string, payload : object) => {
    return await CatModel.findByIdAndUpdate(id, payload, { new: true });
}

// Service to delete a cat by ID
export const deleteCatByIdService = async (id : string) => {
    return await CatModel.findByIdAndDelete(id);
}

// Service to search cats by name, breed, or color
export const searchCatsService = async (query : string) => {
    return await CatModel.find({
        $or: [
            { name: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
            { breed: { $regex: query, $options: "i" } },
            { color: { $regex: query, $options: "i" } },
        ],
    });
}

// Service to recommend cats based on user preferences
export const recommendCatsService = async (kidsFriendly : boolean, apartmentFriendly : boolean) => {
    return await CatModel.find({
        kidsFriendly: kidsFriendly,
        apartmentFriendly: apartmentFriendly
    });
}
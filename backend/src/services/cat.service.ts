import CatModel from "../models/cat.model.ts"

export const createCatService = async (payload : object) => {
    return await CatModel.create(payload)
}
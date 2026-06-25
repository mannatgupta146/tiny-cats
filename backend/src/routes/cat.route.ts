import { Router } from "express";
import { createCatContoller, deleteCatByIdController, getAllCatsController, getCatByIdController, recommendCatsController, searchCatsController, updateCatByIdController } from "../controllers/cat.controller.ts";

const catRouter = Router();

catRouter.post("/create", createCatContoller);

catRouter.get("/:id", getCatByIdController);
catRouter.put("/:id", updateCatByIdController);
catRouter.delete("/:id", deleteCatByIdController);

catRouter.get("/", getAllCatsController);

catRouter.get("/search/all", searchCatsController);

catRouter.post("/recommend", recommendCatsController);

export default catRouter;
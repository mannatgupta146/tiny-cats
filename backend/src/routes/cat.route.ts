import { Router } from "express";
import { createCatContoller } from "../controllers/cat.controller.ts";

const catRouter = Router();

catRouter.post("/create", createCatContoller);

// catRouter.get("/")

// catRouter.get("/search/all")

// catRouter.post("/recommend")

// catRouter.get("/:id")

export default catRouter;
import { Router } from "express";
import { askAiController } from "../controllers/ai.controller.ts";

const aiRouter = Router();

aiRouter.post("/ask", askAiController);

export default aiRouter;
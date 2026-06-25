import { Router } from "express";
import { recommendByAiController } from "../controllers/aiRecommend.controller.ts";

const aiRecommendRouter = Router();

aiRecommendRouter.post("/recommendByAi", recommendByAiController);

export default aiRecommendRouter;
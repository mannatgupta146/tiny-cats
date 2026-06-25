import { Router } from "express";
import { McpController } from "../controllers/mcp.controller.ts";

const mcpRouter = Router();

mcpRouter.get("/test-mcp", McpController);

export default mcpRouter;
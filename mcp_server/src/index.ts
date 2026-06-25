import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
// import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { recommendCatsTool } from "./tools/recommendCats.tool.ts";

// Create server instance
const server = new McpServer({
  name: "tiny-cats",
  version: "1.0.0",
});

server.registerTool("recommendCats", {
    title: "Recommend Cats",
    description: "Recommend best cats based on user preferences for kids-friendly and apartment-friendly cats",
    inputSchema: {
        kidsFriendly: z.boolean(),
        apartmentFriendly: z.boolean()
    }}, 
    async ({ kidsFriendly, apartmentFriendly }) => {
        const result = await recommendCatsTool(kidsFriendly, apartmentFriendly);
        return {
            content: [
                {
                    type: "text",
                    text: `Recommended Cats: ${JSON.stringify(result)}`
                }
            ]
        }
    }
);

console.log("MCP server is running...");
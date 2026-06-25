import type { Request, Response } from "express";
import { getMcpClientService } from "../services/mcp.service.ts";
import { generateAiResponse } from "../services/gemini.service.ts";

export const McpController = async (req: Request, res: Response) => {
    const client = await getMcpClientService();

    const tools = await client.listTools()

    const result = await client.callTool({
        name: "recommend_cats",
        arguments: {
            kidsFriendly: true,
            apartmentFriendly: false
        }
    })

    const content = result.content as { text: string }[];

    const catsData = content[0]!.text;

    let prompt = `
  
    Available cats

    ${catsData}

    recommend best cats from this data

  `;

    const aiResponse = await generateAiResponse(prompt);

    return res.status(200).json({
        success: true,
        message: "MCP client fetched successfully",
        data: aiResponse
    });
}
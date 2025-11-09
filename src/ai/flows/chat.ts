'use server';
/**
 * @fileOverview A simple chat bot flow.
 *
 * - chat - A function that handles the chat interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const ChatInputSchema = z.object({
  message: z.string().describe('The user\'s message to the bot.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export const ChatOutputSchema = z.object({
  response: z.string().describe('The bot\'s response to the user.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return await chatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatPrompt',
  input: { schema: ChatInputSchema },
  prompt: `You are a friendly and helpful medical travel assistant for MediConnect. Your goal is to understand the user's requirements for their medical travel to India.

- Acknowledge their message.
- If their request is clear, summarize it back to them.
- If their request is unclear, ask clarifying questions to better understand their needs (e.g., medical condition, preferred city, budget, any specific concerns).
- Keep your responses concise and friendly.

User's message: {{{message}}}
`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    const responseText = output as string; // Cast the output to string
    return { response: responseText };
  }
);

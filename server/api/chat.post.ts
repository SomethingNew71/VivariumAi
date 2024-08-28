import { Client } from '@langchain/langgraph-sdk';
import type { ChatInput } from '~/data/models';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body: ChatInput = await readBody(event);
  const client = new Client({
    apiUrl: config.app.RPG_API_URL,
    apiKey: config.app.LANGSMITH_API_KEY,
  });
  return await client.runs.wait(body.thread_id, 'agent', {
    input: { messages: [{ role: 'human', content: body.message }] },
    streamMode: 'messages',
  });
});

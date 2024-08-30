import { Client } from '@langchain/langgraph-sdk';
import type { ChatInput, ChatResponse } from '~/data/models';

export default defineEventHandler(async (event): Promise<ChatResponse> => {
  const config = useRuntimeConfig();
  const body: ChatInput = await readBody(event);
  const client = new Client({
    apiUrl: config.app.RPG_API_URL,
    apiKey: config.app.LANGSMITH_API_KEY,
  });

  if (!body.thread_id) {
    throw new Error('No thread_id included in body - this is required');
  }
  if (!body.assistant_id) {
    throw new Error('No assistant_id included in body - this is required');
  }

  const response = await client.runs.wait(body.thread_id, body.assistant_id, {
    input: { messages: [{ role: 'human', content: body.message }] },
  });

  return {
    thread_id: body.thread_id,
    assistant_id: body.assistant_id,
    state: response,
  };
});

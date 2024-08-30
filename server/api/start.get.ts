import { Client } from '@langchain/langgraph-sdk';
import type { ChatResponse } from '~/data/models';

export default defineEventHandler(async (): Promise<ChatResponse> => {
  const config = useRuntimeConfig();
  const client = new Client({
    apiUrl: config.app.RPG_API_URL,
    apiKey: config.app.LANGSMITH_API_KEY,
  });
  const assistants = await client.assistants.search({
    metadata: null,
    offset: 0,
    limit: 10,
  });
  const agent = assistants[0];
  const thread = await client.threads.create();
  const streamResponse = await client.runs.wait(
    thread['thread_id'],
    agent['assistant_id'],
    { input: { messages: [{ role: 'human', content: '' }] } }
  );

  return {
    thread_id: thread['thread_id'],
    assistant_id: agent['assistant_id'],
    state: streamResponse,
  };
});

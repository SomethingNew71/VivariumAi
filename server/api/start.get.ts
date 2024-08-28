import { Client } from '@langchain/langgraph-sdk';
import type { ChatState } from '~/data/models';

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const client = new Client({
    apiUrl: config.app.RPG_API_URL,
    apiKey: config.app.LANGSMITH_API_KEY,
  });
  const thread = await client.threads.create();
  const response = await client.runs.wait(thread['thread_id'], 'agent', {
    input: { messages: [{ role: 'human', content: '' }] },
    config: { configurable: { model_name: 'openai' } },
    streamMode: 'messages',
  });
  return {
    thread_id: thread['thread_id'],
    state: response,
  };
});

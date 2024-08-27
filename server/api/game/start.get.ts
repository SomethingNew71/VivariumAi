import { Client } from '@langchain/langgraph-sdk';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const client = new Client({
    apiUrl: config.app.RPG_API_URL,
    apiKey: config.app.LANGSMITH_API_KEY,
  });
  const thread = await client.threads.create();
  return thread;
});

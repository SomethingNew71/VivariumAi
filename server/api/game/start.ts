import { Client } from '@langchain/langgraph-sdk';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const client = new Client({
    apiUrl: config.app.RPG_API_URL,
    apiKey: config.app.LANGSMITH_API_KEY,
  });

  // List all assistants
  const assistants = await client.assistants.search({
    metadata: null,
    offset: 0,
    limit: 10,
  });

  // We auto-create an assistant for each graph you register in config.
  const agent = assistants[0];

  // Start a new thread
  const thread = await client.threads.get(
    '61118b10-269c-4144-854b-f3f5cdfea05e'
  );

  // Start a streaming run
  const messages = [{ role: 'human', content: "what's the weather in la" }];

  const streamResponse = client.runs.stream(
    thread['thread_id'],
    agent['assistant_id'],
    {
      input: { messages },
    }
  );

  for await (const chunk of streamResponse) {
    console.log(chunk);
  }

  return { test: 'api works' };
});

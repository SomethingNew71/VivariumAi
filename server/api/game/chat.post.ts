import { Client } from '@langchain/langgraph-sdk';
import { Readable } from 'stream';
import { sendStream } from 'h3';
import type { ChatInput } from '~/data/models';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const readable = new Readable({ read() {} });
  const body: ChatInput = await readBody(event);
  const client = new Client({
    apiUrl: config.app.RPG_API_URL,
    apiKey: config.app.LANGSMITH_API_KEY,
  });

  console.log('body-----', body);

  const thread = await client.threads.get(body.thread_id);

  console.log('thread-----', thread);

  const streamResponse = await client.runs.stream(
    thread['thread_id'],
    'agent',
    {
      input: {
        messages: [
          {
            role: 'human',
            content: 'start the game',
          },
        ],
      },
      config: { configurable: { model_name: 'openai' } },
      streamMode: 'messages',
    }
  );

  for await (const event of streamResponse) {
    if (event.event === 'metadata') {
      console.log(`Metadata: Run ID - ${event.data.run_id}`);
      console.log('-'.repeat(50));
    } else if (event.event === 'messages/partial') {
      event.data.forEach((dataItem: any) => {
        if (dataItem.role && dataItem.role === 'user') {
          console.log(`Human: ${dataItem.content}`);
        } else {
          const toolCalls = dataItem.tool_calls || [];
          const invalidToolCalls = dataItem.invalid_tool_calls || [];
          const content = dataItem.content || '';
          const responseMetadata = dataItem.response_metadata || {};

          if (content) {
            readable.push(`{"messageCreated": ${JSON.stringify(content)}}\n`);
            console.log(`AI: ${content}`);
          }

          if (toolCalls.length > 0) {
            console.log('Tool Calls:');
            console.log(formatToolCalls(toolCalls));
          }

          if (invalidToolCalls.length > 0) {
            console.log('Invalid Tool Calls:');
            console.log(formatToolCalls(invalidToolCalls));
          }

          if (responseMetadata) {
            const finishReason = responseMetadata.finish_reason || 'N/A';
            console.log(`Response Metadata: Finish Reason - ${finishReason}`);
          }
        }
      });
      console.log('-'.repeat(50));
    }
  }

  return sendStream(event, readable);
});

function formatToolCalls(toolCalls: any) {
  if (toolCalls && toolCalls.length > 0) {
    const formattedCalls = toolCalls.map((call: any) => {
      return `Tool Call ID: ${call.id}, Function: ${call.name}, Arguments: ${call.args}`;
    });
    return formattedCalls.join('\n');
  }
  return 'No tool calls';
}

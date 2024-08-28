import type { DefaultValues } from '@langchain/langgraph-sdk';

export interface ChatInput {
  message: string;
  thread_id: string;
}
export interface ChatElement {
  text: string;
  isUser: boolean;
}

export interface ChatState {
  messages: [
    {
      content: string | null;
      additional_kwargs: any;
      response_metadata: any;
      type: string | null;
      name: string | null;
      id: string;
      example: boolean;
    }
  ];
  turns: [
    {
      input: {
        content: string | null;
        additional_kwargs: any;
        response_metadata: {
          finish_reason: string | null;
        };
        type: string | null;
        name: string | null;
        id: string | null;
        example: boolean;
        tool_calls: any[];
        invalid_tool_calls: any[];
        usage_metadata: {
          input_tokens: number;
          output_tokens: number;
          total_tokens: number;
        };
      };
      output: {
        content: string | null;
        additional_kwargs: any;
        response_metadata: {
          finish_reason: string | null;
        };
        type: string | null;
        name: string | null;
        id: string | null;
        example: boolean;
        tool_calls: any[];
        invalid_tool_calls: any[];
        usage_metadata: {
          input_tokens: number;
          output_tokens: number;
          total_tokens: number;
        };
      };
      location: string | null;
    }
  ];
  player: any;
  completed_regions: any;
  summary: any;
  latest_action: any;
}

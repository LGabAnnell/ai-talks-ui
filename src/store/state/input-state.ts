export type Message = {
  message: string,
  model: string
}

export type ModelType = 'user' | 'assistant';

export type ModelInfos = {
  model?: string;
  systemInstructions?: string;
  type?: ModelType;
  nickName?: string;
}

export type InputState = {
  modelInfos: ModelInfos[];
  initialMessage: string,
  messages: Message[],
  conversationId?: number
};

export const initialInputState: InputState = {
  modelInfos: [],
  initialMessage: '',
  messages: []
};
export interface InitialRequest {
  userModel: string;
  assistantModel: string;
  message: string;
  systemInstructions: string;
  stream?: boolean;
}

export const defaultRequest: Pick<InitialRequest, 'stream' | 'userModel' | 'assistantModel'> = {
  stream: false,
  assistantModel: 'mixtral',
  userModel: 'llama3'
};
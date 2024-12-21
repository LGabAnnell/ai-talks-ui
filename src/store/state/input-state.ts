export type Message = {
    message: string,
    model: string,
    modelNickname?: string
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
    modelInfos: [
        {
            model: 'llama3',
            type: 'user'
        },
        {
            model: 'llama3',
            type: 'assistant'
        }
    ],
    initialMessage: '',
    messages: []
};
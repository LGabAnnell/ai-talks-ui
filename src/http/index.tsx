import {defaultRequest} from "../model/initial-request.ts";
import {InitialResponse} from "../model/initial-response.ts";
import {ContinuationResponse} from "../model/continuation-response.ts";

export const doInitialRequest = async (
    assistantModel: string,
    userModel: string,
    systemInstructions: string,
    initialMessage: string,
    userInstructions: string
): Promise<InitialResponse> => {
    return await fetch('http://localhost:8080/initiate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...defaultRequest,
            assistantModel: assistantModel,
            userModel: userModel,
            userInstructions: userInstructions,
            systemInstructions: systemInstructions,
            message: initialMessage
        })
    }).then(response => response.json());
};

export const nextRequest = async (conversationId: number): Promise<ContinuationResponse> => {
    return await fetch(`http://localhost:8080/next?conversationId=${conversationId}`)
        .then(response => response.json());
}
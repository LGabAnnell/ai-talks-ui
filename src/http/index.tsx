import { defaultRequest } from "../model/initial-request.ts";
import { InitialResponse } from "../model/initial-response.ts";
import { ContinuationResponse } from "../model/continuation-response.ts"; // Ensure to import your RootState type

export const doInitialRequest = async (systemInstructions: string, initialMessage: string): Promise<InitialResponse>  => {
  return await fetch('http://localhost:8080/initiate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...defaultRequest,
      systemInstructions: systemInstructions,
      message: initialMessage
    })
  }).then(response => response.json());
};

export const nextRequest = async (conversationId: number): Promise<ContinuationResponse> => {
  return await fetch(`http://localhost:8080/next?conversationId=${conversationId}`)
    .then(response => response.json());
}
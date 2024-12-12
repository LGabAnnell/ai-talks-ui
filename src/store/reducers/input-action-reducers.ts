import { initialInputState, InputState, Message, ModelInfos } from "../state/input-state.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: 'inputState',
  initialState: initialInputState,
  reducers: {
    updateModelInfos(state: InputState, action: PayloadAction<ModelInfos>) {
      const existingModelInfo = state.modelInfos.find(info => info.type === action.payload.type);
      if (existingModelInfo == null) {
        state.modelInfos = [...state.modelInfos, action.payload];
        return;
      }

      state.modelInfos = state.modelInfos.map(modelInfo => {
        if (modelInfo.type === action.payload.type) {
          return { ...modelInfo, ...action.payload };
        }
        return modelInfo;
      });
    },
    updateMessages(state: InputState, action: PayloadAction<Message>) {
      state.messages = [...state.messages, action.payload];
    },
    updateConversationId(state: InputState, action: PayloadAction<number>) {
      state.conversationId = action.payload;
    },
    updateInitialMessage(state: InputState, action: PayloadAction<string>) {
      state.initialMessage = action.payload;
    }
  }
});

export const {
  updateInitialMessage,
  updateModelInfos,
  updateMessages,
  updateConversationId
} = inputSlice.actions;

export const inputStateReducer = inputSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import { inputStateReducer } from "./reducers/input-action-reducers.ts";

export const inputActionStore = configureStore({
  reducer: {
    inputStateReducer
  }
});

export type RootState = ReturnType<typeof inputActionStore.getState>;
export type AppDispatch = typeof inputActionStore.dispatch;
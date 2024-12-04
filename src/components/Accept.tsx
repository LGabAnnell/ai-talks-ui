import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { doInitialRequest } from "../http";
import { updateConversationId, updateMessages } from "../store/reducers/input-action-reducers.ts";

export const Accept = () => {
  const {
    systemInstructions,
    initialMessage
  } = useSelector((state: RootState) => state.inputStateReducer)
  const dispatch: AppDispatch = useDispatch();
  return (
    <div>
      <button onClick={() =>
        doInitialRequest(
          systemInstructions,
          initialMessage
        ).then(result => {
          dispatch(updateMessages(result));
          dispatch(updateConversationId(result.conversationId));
        })
      }>
        Accept
      </button>
    </div>
  )
}
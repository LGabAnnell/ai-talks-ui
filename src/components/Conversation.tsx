import { nextRequest } from "../http";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { updateMessages } from "../store/reducers/input-action-reducers.ts";

export const MessageDisplay = (props: { message: string, model: string }) => {
  const { message, model } = props;
  return <>
    <h5>
      {model}
    </h5>
    <p className={'text-start'}>{message}</p>
  </>;
};

export const Conversation = () => {
  const {
    messages,
    conversationId
  } = useSelector((state: RootState) => state.inputStateReducer)

  const dispatch: AppDispatch = useDispatch();

  if (messages == null || messages.length == 0) {
    return <></>
  }

  return <>
    <button onClick={() => nextRequest(conversationId!).then(result => {
      dispatch(updateMessages(result));
    })}>
      Continue!
    </button>
    {messages.map(message => <MessageDisplay key={message.message} message={message.message} model={message.model}/>)}
  </>
}
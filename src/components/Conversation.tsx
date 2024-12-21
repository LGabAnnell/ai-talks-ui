import { nextRequest } from "../http";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { updateMessages } from "../store/reducers/input-action-reducers.ts";
import Markdown from "react-markdown";

export const MessageDisplay = (props: { message: string, model: string, modelNickname?: string }) => {
  const { message, model, modelNickname } = props;

  let nameToDisplay = model;

  if (modelNickname != null && modelNickname.length > 0) {
    nameToDisplay = modelNickname;
  }

  return <>
    <h5>
      { nameToDisplay }
    </h5>
    <Markdown className={'text-start'}>{message}</Markdown>
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
    {messages.map(message => <MessageDisplay key={message.message} modelNickname={message.modelNickname} message={message.message} model={message.model}/>)}
  </>
}
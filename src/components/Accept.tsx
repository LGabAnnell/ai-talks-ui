import {AppDispatch, RootState} from "../store";
import {useDispatch, useSelector} from "react-redux";
import {doInitialRequest} from "../http";
import {resetState, updateConversationId, updateMessages} from "../store/reducers/input-action-reducers.ts";
import {useState} from "react";

export const Accept = () => {
    const {
        modelInfos,
        initialMessage
    } = useSelector((state: RootState) => state.inputStateReducer)
    const dispatch: AppDispatch = useDispatch();
    const [conversationStarted, setConversationStarted] = useState<boolean>(true);
    return (
        <div>
            {conversationStarted ?
                <button onClick={() => {
                    setConversationStarted(false);
                    doInitialRequest(
                        modelInfos.find(modelInfo => modelInfo.type === 'user')?.model ?? "",
                        modelInfos.find(modelInfo => modelInfo.type === 'assistant')?.model ?? "",
                        modelInfos.find(modelInfo => modelInfo.type === 'user')?.systemInstructions ?? "",
                        initialMessage,
                        modelInfos.find(modelInfo => modelInfo.type === 'assistant')?.systemInstructions ?? ""
                    ).then(result => {
                        dispatch(updateMessages(result));
                        dispatch(updateConversationId(result.conversationId));
                    })
                }}>
                    Accept
                </button>
                :
                <button onClick={() => { dispatch(resetState()); setConversationStarted(true); }} >
                    Reset
                </button>
            }
        </div>
    )
}
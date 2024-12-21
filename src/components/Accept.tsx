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

    const userModel = modelInfos.find(modelInfo => modelInfo.type === 'user');
    const assistantModel = modelInfos.find(modelInfo => modelInfo.type === 'assistant');
    return (
        <div>
            {conversationStarted ?
                <button onClick={() => {
                    setConversationStarted(false);
                    doInitialRequest(
                        userModel?.model ?? "",
                        assistantModel?.model ?? "",
                        userModel?.systemInstructions ?? "",
                        initialMessage,
                        assistantModel?.systemInstructions ?? "",
                        userModel?.nickName ?? "",
                        assistantModel?.nickName ?? ""
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
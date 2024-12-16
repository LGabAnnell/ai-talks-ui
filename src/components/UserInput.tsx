import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { updateInitialMessage, updateModelInfos } from "../store/reducers/input-action-reducers.ts";

export const UserInput = () => {

  const dispatch: AppDispatch = useDispatch();

  return <div className={'d-flex gap-2 w-100'}>
    <div className={'d-flex flex-column gap-2'}>
      <select name="usermodel-select" id="usermodel-select" onChange={(event) => dispatch(updateModelInfos(
        {
          type: "user",
          model: event.currentTarget.value
        }
      ))}>
        <option value="llama3">Llama3</option>
        <option value="mixtral">mixtral</option>
      </select>
      <label htmlFor={'system-instructions'}>System Instructions</label>
      <textarea id={'system-instructions'} onInput={event => dispatch(updateModelInfos(
        {
          type: "user",
          systemInstructions: event.currentTarget.value
        }
      ))}></textarea>
    </div>
    <div className={'d-flex flex-column gap-2'}>
      <select name="assistantmodel-select" id="assistantmodel-select" onChange={event => dispatch(updateModelInfos(
        {
          type: "assistant",
          model: event.currentTarget.value
        }
      ))}>
        <option value="llama3">Llama3</option>
        <option value="mixtral">mixtral</option>
      </select>
      <label htmlFor={'user-input'}>Write something to start the conversation!</label>
      <textarea id={'user-input'}
                onInput={event => dispatch(updateInitialMessage(event.currentTarget.value))}></textarea>
      <label htmlFor={'other-instructions'}>Instructions for second model</label>
      <textarea id={'other-instructions'} onInput={event => dispatch(updateModelInfos(
        {
          type: "assistant",
          systemInstructions: event.currentTarget.value
        }
      ))}></textarea>
    </div>
  </div>;
};
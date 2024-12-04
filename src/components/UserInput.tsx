import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { updateInitialMessage, updateModelInfos } from "../store/reducers/input-action-reducers.ts";
import { useEffect } from "react";

export const UserInput = () => {

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(updateModelInfos({
      model: 'llama3',
      type: "user",
      systemInstructions: ''
    }));
    dispatch(updateModelInfos({
      model: 'llama3',
      type: "assistant",
      systemInstructions: ''
    }))
  }, [])

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
      <label htmlFor={'user-input'}>User Input</label>
      <textarea id={'user-input'}
                onInput={event => dispatch(updateInitialMessage(event.currentTarget.value))}></textarea>
    </div>
  </div>;
};
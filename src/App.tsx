import './App.css'
import { Provider } from "react-redux";
import { inputActionStore } from "./store";
import { UserInput } from "./components/UserInput.tsx";
import { Accept } from "./components/Accept.tsx";
import { Conversation } from "./components/Conversation.tsx";

function App() {
  return (
    <Provider store={inputActionStore}>
      <div className={'d-flex flex-column align-items-start'}>
        <UserInput />
        <Accept />
        <Conversation />
      </div>
    </Provider>
  );
}

export default App;

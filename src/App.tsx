import React, { FunctionComponentElement } from "react";
import { useChannel } from "use-phoenix-channel";
import logo from "./logo.svg";
import "./App.css";

interface Message {
  event: any;
  payload: any;
}

const countReducer = (state: any, msg: Message) => {
  console.log(msg.event, msg.payload);
};

function App(): FunctionComponentElement<object> {
  // const [state, broadcast] = useChannel("meeting:NK74KR", reducer);
  return (
    <div className="App">
      hello 
    </div>
  );
}

export default App;

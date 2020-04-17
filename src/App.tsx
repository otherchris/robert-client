import React, { FunctionComponentElement, useContext } from "react";
import "./App.css";
import { SocketContext, SocketContextType } from "./contexts/SocketContext";
import BuildData from "./components/BuildData";

function App(): FunctionComponentElement<object> {
  const { connState }: SocketContextType = useContext(SocketContext);

  return (
    <div className="App">
      <BuildData connState={connState} />
    </div>
  );
}

export default App;

import React, { FunctionComponentElement, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApiContext } from "./contexts/ApiContext";
import { SocketContext } from "./contexts/SocketContext";

function App(): FunctionComponentElement<object> {
  const apis = useContext(ApiContext);
  const socket = useContext(SocketContext);
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;

import React, { FunctionComponentElement, useContext, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApiContext } from "./contexts/ApiContext";
import { SocketContext } from "./contexts/SocketContext";
import BuildData from "./components/BuildData";

function App(): FunctionComponentElement<object> {
  const apis = useContext(ApiContext);
  const socket = useContext(SocketContext);

  const [socketState, setSocketState] = useState();

  useEffect(() => {
    setSocketState(socket.isConnected());
  })

  return (
    <div className="App">
      <BuildData socket={socket} />
      <button type="button" onClick={() => { console.log(socket.connectionState()) }}>
        App 
      </button>
    </div>
  );
}

export default App;

import React, { FunctionComponentElement, useContext, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApiContext } from "./contexts/ApiContext";
import { SocketContext, SocketContextType } from "./contexts/SocketContext";
import BuildData from "./components/BuildData";

function App(): FunctionComponentElement<object> {
  const apis = useContext(ApiContext);
  const { socket, connState }: SocketContextType = useContext(SocketContext);

  return (
    <div className="App">
      <BuildData connState={ connState } />
      <button type="button" onClick={() => { console.log(connState) }}>
        App { connState }
      </button>
    </div>
  );
}

export default App;

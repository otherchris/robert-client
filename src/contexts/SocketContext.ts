import React from "react";
import { ConnectionState, Socket } from "phoenix";
import SocketMock from "../mocks/SocketMock";

export interface SocketContextType {
  socket: Socket | SocketMock;
  connState: ConnectionState;
}

const dflt: SocketContextType = {
  socket: new Socket("", {}),
  connState: "closed"
};

export const SocketContext = React.createContext(dflt);

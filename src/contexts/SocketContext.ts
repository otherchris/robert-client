import React from 'react';
import { ConnectionState, Socket } from 'phoenix';

export interface SocketContextType {
    socket: Socket;
    connState: ConnectionState;
}

const dflt: SocketContextType = {
    socket: new Socket("", {}),
    connState: "closed"
}

export const SocketContext = React.createContext(dflt);
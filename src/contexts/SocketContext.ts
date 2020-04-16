import React from 'react';
import { ConnectionState, Socket } from 'phoenix';

export const SocketContext = React.createContext(new Socket("", {}));
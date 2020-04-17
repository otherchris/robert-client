import React, { useEffect, useState } from 'react'
import { Socket, ConnectionState } from 'phoenix'

import { SocketContext, SocketContextType } from './SocketContext'

const wsUrlFun = () => {
  switch (process.env.NODE_ENV) {
    case "test": 
      return "NONE";
    case "development": 
      return "ws://localhost:4000/socket";
    case "production":
      return "ws://localhost:4000/socket";
  }
}

const wsUrl = wsUrlFun();

const SocketProvider: React.FC = ({ children }) => {
  const socket = new Socket(wsUrl, { params: {} });
  const [connState, setConnState] = useState<ConnectionState>("closed")
  useEffect(() => {
    socket.onOpen(() => { setConnState("open") })
    socket.onClose(() => { setConnState("closed") })
    socket.connect();
  }, [wsUrl]);

  return (
    <SocketContext.Provider value={{ socket, connState }}>
      { connState }
      { children }
    </SocketContext.Provider>
   )
 }

export default SocketProvider
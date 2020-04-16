import React, { useEffect, useState } from 'react'
import { Socket } from 'phoenix'

import { SocketContext } from './SocketContext'

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
  useEffect(() => {
    socket.connect();
  }, [wsUrl]);

  return (
    <SocketContext.Provider value={socket}>
      { children }

      <button type="button" onClick={() => { console.log(socket.connectionState()) }}>
        SP 
      </button>
    </SocketContext.Provider>
   )
 }

export default SocketProvider
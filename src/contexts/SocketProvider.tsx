import React, { useEffect, useState } from 'react'
import { Socket, ConnectionState } from 'phoenix'

import SocketMock from "../mocks/SocketMock";
import { SocketContext, SocketContextType } from './SocketContext'
import RobertSocketDriverMock from '../apis/RobertSocketDriverMock';

const socket = process.env.NODE_ENV === "test" ? 
  new SocketMock();
  new Socket("ws://localhost:4000/socket", { params: {} });

const SocketProvider: React.FC = ({ children }) => {
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
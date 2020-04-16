import React, { useEffect } from 'react'
import { Socket } from 'phoenix'

import { SocketContext } from './SocketContext'

const wsUrl = () => {
  switch (process.env.NODE_ENV) {
    case "test": 
      return "NONE";
    case "development": 
      return "ws://localhost:4000/socket";
    case "production":
      return "ws://localhost:4000/socket";
  }
}
const SocketProvider: React.FC = ({ children }) => {
  const socket = new Socket(wsUrl(), { params: {}})

  useEffect(() => { socket.connect() }, [wsUrl])

  return (
    <SocketContext.Provider value={socket}>
      { children }
    </SocketContext.Provider>
   )
 }

export default SocketProvider
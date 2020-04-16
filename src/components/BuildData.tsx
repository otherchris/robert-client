import React, { ReactNode, useEffect, useState } from 'react';
import { Socket, ConnectionState } from 'phoenix';

const bgColor = (state: ConnectionState): string => {
  switch(state) {
    case "connecting": 
      return "yellow";
    case "open": 
      return "green";
    case "closing": 
      return "salmon";
    case "closed":
      return "red";
  }
};

const BuildData: React.FC<{socket: Socket}> = (props) => {

  const [clopen, setClopen] = useState();
  useEffect(() => setClopen(props.socket.connectionState()));

  return (
    <div style={{backgroundColor: bgColor(clopen)}}>
      <b>Build</b>
      <ul>
        <li>env: {process.env.NODE_ENV}</li>
        <li>socket state: {clopen}</li>
      </ul>
      <button type="button" onClick={() => { console.log(clopen) }}>
        BuildData
      </button>
    </div>
  );
}

export default BuildData;
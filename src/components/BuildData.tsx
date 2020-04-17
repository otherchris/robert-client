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

const BuildData: React.FC<{connState: ConnectionState}> = (props) => {

  return (
    <div style={{backgroundColor: bgColor(props.connState)}}>
      <b>Build</b>
      <ul>
        <li>env: {process.env.NODE_ENV}</li>
        <li>socket state: {props.connState}</li>
      </ul>
    </div>
  );
}

export default BuildData;
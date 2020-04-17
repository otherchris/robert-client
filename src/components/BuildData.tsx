import React from "react";
import { ConnectionState } from "phoenix";

const bgColor = (state: ConnectionState): string => {
  switch (state) {
    case "connecting":
      return "yellow";
    case "open":
      return "green";
    case "closing":
      return "salmon";
    case "closed":
      return "red";
    default:
      return "";
  }
};

interface BuildDataProps {
  connState: ConnectionState;
  meetingId: string | undefined;
}

const BuildData: React.FC<BuildDataProps> = ({ connState, meetingId }) => {
  return (
    <div style={{ backgroundColor: bgColor(connState) }}>
      <b>Build</b>
      <ul>
        <li>
          env:
          {process.env.NODE_ENV}
        </li>
        <li>
          socket state:
          {connState}
        </li>
        <li>
          meetingId:
          {meetingId}
        </li>
      </ul>
    </div>
  );
};

export default BuildData;

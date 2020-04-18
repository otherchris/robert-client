import React from "react";
import { ConnectionState } from "phoenix";
import { LodashIsUndefined } from "lodash/fp";

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
  channelState: string | undefined;
}

const BuildData: React.FC<BuildDataProps> = ({ connState, meetingId, channelState }) => {
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
        <li>
          channelState:
          {channelState}
        </li>
      </ul>
    </div>
  );
};

export default BuildData;

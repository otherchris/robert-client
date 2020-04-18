import React, { useEffect } from "react";

interface JoinMeetingProps {
  setMeetingId: Function;
  channelJoiner: Function;
}
const JoinMeeting: React.FC<JoinMeetingProps> = ({ setMeetingId, channelJoiner }) => {
  return (
    <div>
      <label htmlFor="meeting">
        Enter a meeting id
        <input type="text" id="meeting" onChange={(e) => {
          setMeetingId(e.target.value);
        }}/>
      </label>
      <button type="button" id="submit" onClick={() => channelJoiner()}>
        JOIN
      </button>
    </div>
  );
};

export default JoinMeeting;

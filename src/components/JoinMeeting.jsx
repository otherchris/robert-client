import React, { useEffect } from "react";

const JoinMeeting = ({ setMeetingId }) => {

  useEffect(() => {
    document.getElementById("submit").addEventListener("click", () => {
      const val = document.getElementById("meeting").value;
      setMeetingId(val);
    })
  }, [0])

  return (
    <div>
      <label htmlFor="meeting">
        Enter a meeting id
        <input type="text" id="meeting" />
      </label>
      <button type="button" id="submit">
        JOIN
      </button>
    </div>
  );
};

export default JoinMeeting;

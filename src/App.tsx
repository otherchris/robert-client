import React, {
  FunctionComponentElement,
  useContext,
  useEffect,
  useState
} from "react";
import "./App.css";
import { SocketContext, SocketContextType } from "./contexts/SocketContext";
import BuildData from "./components/BuildData";
import JoinMeeting from "./components/JoinMeeting";

function App(): FunctionComponentElement<object> {
  const { connState, socket }: SocketContextType = useContext(SocketContext);

  const [meetingId, setMeetingId] = useState();

  return (
    <div className="App">
      <BuildData connState={connState} meetingId={meetingId} />
      {meetingId ? null : <JoinMeeting setMeetingId={setMeetingId} />}
    </div>
  );
}

export default App;

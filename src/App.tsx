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
  const [channel, setChannel] = useState();
  const [channelState, setChannelState] = useState("none");

  const channelJoiner = () => {
    const channelMaybe = socket.channel(`meeting:${meetingId}`, {});
    channelMaybe.join()
      .receive("ok", () => { setChannel(channelMaybe); setChannelState("open") })
      .receive("error", () => setChannelState("error"));
  }
  
  return (
    <div className="App">
      <BuildData connState={connState} meetingId={meetingId} channelState={channelState}/>
      {channel ? null : <JoinMeeting setMeetingId={setMeetingId} channelJoiner={channelJoiner} />}
    </div>
  );
}

export default App;

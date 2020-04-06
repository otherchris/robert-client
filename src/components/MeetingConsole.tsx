import React from 'react';
import { MeetingData } from './MeetingDataProvider';

const MeetingNotLoadedConsole = (props: any) => {
  return (
    <div>
      <input name="meeting-id"></input>
      <label htmlFor="meeting-id">Enter a meeting id</label>
    </div>
  ) 
}
const MeetingLoadingConsole = (props: any) => {
  return (
    <div>
      loading 
    </div>
  ) 
}
const MeetingLoadedConsole = (props: any) => {
  return (
    <div>
      meeting id: {props.data.meetingId}
    </div>
  ) 
}
const MeetingErrorConsole = (props: any) => {
  return (
    <div>
      error 
    </div>
  ) 
}

const componentChooser = {
  'NOT_LOADED': MeetingNotLoadedConsole,
	'LOADED': MeetingLoadedConsole,
  'LOADING': MeetingLoadingConsole,
	'ERROR': MeetingErrorConsole,
}

interface MeetingConsoleProps {
  data: MeetingData
}

const MeetingConsole = (props: MeetingConsoleProps) => {
    console.log(props)
  return componentChooser[props.data.state].apply(null, [props])
};

export default MeetingConsole;
import React from 'react';

const MeetingNotLoadedConsole = (props: any) => {
  return (
    <div>
      <input name="meeting-id"></input>
      <label for="meeting-id">Enter a meeting id</label>
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
const MeetingConsole = (props: any) => {
    console.log(props)
  return componentChooser[props.data.state].apply(this, [props])
};

export default MeetingConsole;
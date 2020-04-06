enum MeetingDataState {
	Loading =  "LOADING",
	Loaded = "LOADED",
	NotLoaded = "NOT_LOADED",
	Error = "ERROR",
}

export interface MeetingData {
    meeting_id: string;
    state: MeetingDataState;
}

const MeetingDataProvider = (props: any) => {
  
}

export default MeetingDataProvider;
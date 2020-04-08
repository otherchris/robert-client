interface MeetingConfig {
  meetingId: string;
  subjectId: string;
}

class Meeting {
  meetingId: string;
  subjectId: string;

  constructor(config: MeetingConfig) {
    this.meetingId = config.meetingId;
    this.subjectId = config.subjectId;
  }
}

export default Meeting;

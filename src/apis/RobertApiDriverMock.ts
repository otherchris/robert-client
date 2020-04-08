import { RobertApiDriver } from "./RobertApi";
import Meeting from "../domain/Meeting";

interface RobertApiDriverMockConfig {
  mockMeeting: Meeting;
}

export default class RobertApiDriverMock implements RobertApiDriver {
  mockMeeting: Meeting;

  constructor(config: RobertApiDriverMockConfig) {
    this.mockMeeting = config.mockMeeting;
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  getMeetingById(meetingId: string): Promise<Meeting> {
    return new Promise(r => {
      r(this.mockMeeting);
    });
  }
}

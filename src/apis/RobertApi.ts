import Meeting from "../domain/Meeting";

export interface RobertApiDriver {
  getMeetingById(meetingId: string): Promise<Meeting>;
}

interface RobertApiConfig {
  driver: RobertApiDriver;
}

export default class RobertApi {
  driver: RobertApiDriver;

  constructor(config: RobertApiConfig) {
    this.driver = config.driver;
  }

  async getMeetingById(meetingId: string): Promise<Meeting> {
    return this.driver.getMeetingById(meetingId);
  }
}

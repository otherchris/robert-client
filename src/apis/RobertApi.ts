export interface RobertApiDriver {
  createMeeting(): Promise<string>;
  joinMeeting(s: string): Promise<string>;
}

interface RobertApiConfig {
  driver: RobertApiDriver;
}

export default class RobertApi {
  driver: RobertApiDriver;

  constructor(config: RobertApiConfig) {
    this.driver = config.driver;
  }

  async createMeeting(): Promise<string> {
    return this.driver.createMeeting();
  }

  async joinMeeting(meeting_id: string): Promise<string> {
    return this.driver.joinMeeting(meeting_id);
  }
}

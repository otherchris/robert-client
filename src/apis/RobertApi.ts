export interface RobertApiDriver {
  createMeeting(): Promise<string>;
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
}

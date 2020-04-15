import { RobertApiDriver } from "./RobertApi";

interface RobertApiDriverMockConfig {
}

export default class RobertApiDriverMock implements RobertApiDriver {

  constructor(config: RobertApiDriverMockConfig) {
  }

  // eslint-disable-next-line class-methods-use-this
  createMeeting(): Promise<string> {
    return new Promise(r => {
      r("MEETIN");
    });
  }

  // eslint-disable-next-line class-methods-use-this
  joinMeeting(meeting_id: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (meeting_id === "SUCCES") {
        resolve("OK");
      } else {
        reject("ERROR")
      }
    });
  }
}

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
}

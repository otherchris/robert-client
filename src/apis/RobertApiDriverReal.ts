import { RobertApiDriver } from "./RobertApi";

// Placeholder for now so we can demonstrate a contract test
// This class will be where we make real API calls and
// translate the results into the types used by this app
export default class RobertApiDriverReal implements RobertApiDriver {
  // eslint-disable-next-line class-methods-use-this
  createMeeting(): Promise<string> {
    return new Promise(r => {
      r("MEETIN");
    });
  }
  joinMeeting(s: string): Promise<string> {
    return new Promise(r => {
      r("MEETIN");
    });
  }
}

import { RobertApiDriver } from "./RobertApi";
import Meeting from "../domain/Meeting";

// Placeholder for now so we can demonstrate a contract test
// This class will be where we make real API calls and
// translate the results into the types used by this app
export default class RobertApiDriverReal implements RobertApiDriver {
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  getMeetingById(meetingId: string): Promise<Meeting> {
    return new Promise(r => {
      r(new Meeting({ meetingId: "MEETIN", subjectId: "CHAIR" }));
    });
  }
}

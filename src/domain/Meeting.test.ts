import assign from "lodash/fp/assign";
import { Meeting, allowAction } from "./Meeting";
import { Action } from "./Action";

const testActionOne: Action = {
  name: "test-action-one"
};

const testMeeting: Meeting = {
  meetingId: "MEETIN",
  subjectId: "chair",
  allowedActions: []
};

describe("Meeting", () => {
  describe("allowAction", () => {
    test("allowAction adds the action to the allowed actions", () => {
      const newMeeting = allowAction(testMeeting, testActionOne);
      expect(newMeeting.allowedActions).toEqual([testActionOne]);
    });
    test("allowAction does not duplicate occurences of an action", () => {
      const tm = assign(testMeeting, { allowedActions: [testActionOne] });
      const newMeeting = allowAction(tm, testActionOne);
      expect(newMeeting.allowedActions).toEqual([testActionOne]);
    });
  });
});

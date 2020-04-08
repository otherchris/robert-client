import RobertApiDriverMock from "./RobertApiDriverMock";
import RobertApiDriverReal from "./RobertApiDriverReal";
import Meeting from "../domain/Meeting";

const mockMeeting = new Meeting({ meetingId: "MEETIN", subjectId: "CHAIR" });

// When RobertApiDriverReal is implemented, add a fixture here that
// inserts mockUsers. Right now it's hardcoded.

describe("RobertApiDriver contract", () => {
  const mockDriver = new RobertApiDriverMock({ mockMeeting });
  const realDriver = new RobertApiDriverReal();

  test("getUsers", async () => {
    [mockDriver, realDriver].forEach(async d => {
      const meeting = await d.getMeetingById(mockMeeting.meetingId);
      expect(meeting).toEqual(mockMeeting);
    });
  });
});

import RobertApi from "./RobertApi";
import Meeting from "../domain/Meeting";
import RobertApiDriverMock from "./RobertApiDriverMock";

const mockMeeting: Meeting = new Meeting({
  meetingId: "MEETIN",
  subjectId: "CHAIR"
});

// eslint-disable-next-line func-names
describe(RobertApi, function() {
  let robertApi: RobertApi;

  beforeEach(() => {
    robertApi = new RobertApi({
      driver: new RobertApiDriverMock({ mockMeeting })
    });
  });

  describe("getMeetingById", () => {
    test("returns a list of User", async () => {
      expect(robertApi.getMeetingById("MEETIN")).resolves.toEqual(mockMeeting);
    });
  });
});

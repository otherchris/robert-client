import RobertApi from "./RobertApi";
import RobertApiDriverMock from "./RobertApiDriverMock";

// eslint-disable-next-line func-names
describe(RobertApi, function() {
  let webApi: RobertApi;

  beforeEach(() => {
    webApi = new RobertApi({ driver: new RobertApiDriverMock({}) });
  });

  describe("createMeeting", () => {
    test("returns a meeting id", async () => {
      expect(webApi.createMeeting()).resolves.toEqual(expect.stringContaining(""));
    });
  });
});

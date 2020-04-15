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

  describe("joinMeeting", () => {
    test("resolves to OK on success", async () => {
      await expect(webApi.joinMeeting("SUCCES")).resolves.toEqual("OK");
    });

    test("rejects with ERROR otherwise", async () => {
      await expect(webApi.joinMeeting("ERROR_")).rejects.toEqual("ERROR");
    });
  });
});

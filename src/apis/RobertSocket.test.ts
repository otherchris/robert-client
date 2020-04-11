import RobertSocket from "./RobertSocket";
import RobertSocketDriverMock from "./RobertSocketDriverMock";

describe("RobertSocket", () => {
  let rsd: RobertSocketDriverMock;
  let rs: RobertSocket;

  beforeEach(function be() {
    rsd = new RobertSocketDriverMock({ baseUrl: "fakeUrl" });
    rs = new RobertSocket({ driver: rsd });
  });
  describe("setters", () => {
    test("setConnectionState", () => {
      rs.setConnectionState("connecting");
      expect(rs.connectionState).toEqual("connecting");
    });
    test("setTopic", () => {
      rs.setTopic("meeting:MEETIN");
      expect(rs.topic).toEqual("meeting:MEETIN");
    });
    test("setChannelState", () => {
      rs.setChannelState("joined");
      expect(rs.channelState).toEqual("joined");
    });
  });
  test("connect", () => {
    rs.connect();
    expect(rs?.connectionState).toEqual("open");
  });
  describe("joinChannel", () => {
    test("joinChannel if connected", () => {
      rs.setConnectionState("open");
      rs.joinChannel();
      expect(rs.channelState).toEqual("joined");
    });
  });
});

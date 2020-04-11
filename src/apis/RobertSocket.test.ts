import RobertSocket, { MessageHandler } from "./RobertSocket";
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
    test("do not join channel if not connected", () => {
      rs.setConnectionState("closed");
      rs.joinChannel();
      expect(rs.channelState).toEqual("not joined");

      rs.setConnectionState("closing");
      rs.joinChannel();
      expect(rs.channelState).toEqual("not joined");

      rs.setConnectionState("connecting");
      rs.joinChannel();
      expect(rs.channelState).toEqual("not joined");
    });
  });
  describe("push", function be() {
    let mockFun: jest.Mock;
    let handler: MessageHandler<string, string, string>;
    beforeEach(() => {
      mockFun = jest.fn();
      handler = {
        okHandler: mockFun,
        errorHandler: mockFun,
        timeoutHandler: mockFun
      };
    });
    test("do not push if channel not joined", () => {
      rs.push("msg", {}, 1, handler);
      expect(mockFun.mock.calls).toHaveLength(0);
    });
    test("on ok call ok handler", () => {
      rs.setChannelState("joined");
      rs.push("msg", {}, 1, handler);
      expect(mockFun.mock.calls).toHaveLength(1);
    });
  });
});
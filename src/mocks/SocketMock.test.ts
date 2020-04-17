import SocketMock, { CONNECTION_LATENCY } from "./SocketMock";

const CONNECTION_WAIT_TIME = CONNECTION_LATENCY + 1;

const waitForConnect = (socket: SocketMock): Promise<void> => {
  return new Promise((r, e) => {
    setTimeout(() => {
      if (socket.connectionState() === "open") {
        r();
      } else {
        e();
      }
    }, CONNECTION_WAIT_TIME);
  });
};

describe("SocketMock contract", () => {
  let mokSoket = new SocketMock();

  beforeEach(() => {
    mokSoket = new SocketMock();
  });

  test("connect mocks latency", () => {
    mokSoket.connect();
    expect(mokSoket.connState).toBe("connecting");
    return waitForConnect(mokSoket).then(() => {
      expect(mokSoket.connState).toBe("open");
    });
  });

  test("can bypass connection latency", () => {
    mokSoket.connect("NO_LATENCY");
    expect(mokSoket.connState).toBe("open");
  });

  test("onOpen", () => {
    const mockFun = jest.fn();
    mokSoket.onOpen(mockFun);
    mokSoket.connect("NO_LATENCY");
    expect(mockFun.mock.calls.length).toBe(1);
  });

  test("onClose", () => {
    const mockFun = jest.fn();
    mokSoket.onClose(mockFun);
    mokSoket.connect("NO_LATENCY");
    mokSoket.disconnect();
    expect(mockFun.mock.calls.length).toBe(1);
  });
});

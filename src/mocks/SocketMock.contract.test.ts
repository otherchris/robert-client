import noop from "lodash/noop";
import { Socket } from "phoenix";
import SocketMock from "./SocketMock";
import { waitFor, wait } from "@testing-library/dom";

const CONNECTION_WAIT_TIME = 500;

const waitForConnect = (socket) => {
  return new Promise((r, e) => {
    setTimeout(() => {
      if (socket.connectionState() === "open") {
        r();
      } else {
        e();
      }
    }, CONNECTION_WAIT_TIME);
  })
}

describe("SocketMock contract", () => {
  let soket = new Socket("ws://localhost:4000/socket", { params: {} });
  let mokSoket = new SocketMock();

  beforeEach(() => {
    let soket = new Socket("ws://localhost:4000/socket", { params: {} });
    let mokSoket = new SocketMock();
  })

  test("connect", () => {
      mokSoket.connect();
  });

  test("onOpen", () => {
    const mockFun = jest.fn();
    mokSocket.onOpen(mockFun);
    mokSocket.connect();
    expect(mockFun.mock.calls.length).toBe(1);
  });
});
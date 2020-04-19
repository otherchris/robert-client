import React, { useContext } from "react";
import { mount, shallow } from "enzyme";
import { SocketContext } from "../contexts/SocketContext";
import SocketProvider from "./SocketProvider";
import { CONNECTION_LATENCY } from "../mocks/SocketMock";

const waitForConnect = (): Promise<void> => {
  return new Promise(r => {
    setTimeout(() => {
      r();
    }, CONNECTION_LATENCY + 1);
  });
};

test("renders children", () => {
  const tree = (
    <SocketProvider>
      <div id="child">hello</div>
    </SocketProvider>
  );
  const w = shallow(tree);
  expect(w.find("div#child").text()).toEqual("hello");
});

test("children have access to socket", () => {
  const Tester: React.FC = () => {
    const { connState, socket } = useContext(SocketContext);
    return (
      <div id="test">
        {connState}
        {JSON.stringify(socket)}
      </div>
    );
  };
  const tree = (
    <SocketProvider>
      <Tester />
    </SocketProvider>
  );
  const w = mount(tree);
  const testContents = w.find("div#test");
  expect(testContents.text()).toContain("closed");
  // content of our mockSocket
  expect(testContents.text()).toContain('{"connState":"closed"');
  return waitForConnect().then(() => {
    expect(testContents.text()).toContain("open");
  });
});

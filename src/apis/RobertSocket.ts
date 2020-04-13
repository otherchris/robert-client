import { ConnectionState } from "phoenix";
import {
  ChannelState,
  MessageHandler,
  PushHandler,
  RobertSocketDriver
} from "./types";

import { addHandlerToList } from "./helpers";

export interface RobertSocketConfig {
  driver: RobertSocketDriver;
  topic?: string;
}

class RobertSocket {
  driver: RobertSocketDriver;
  topic = "";
  connectionState: ConnectionState = "closed";
  channelState: ChannelState = "not joined";

  constructor(config: RobertSocketConfig) {
    this.driver = config.driver;
  }

  setConnectionState(newState: ConnectionState): void {
    this.connectionState = newState;
  }

  setTopic(newTopic: string): void {
    this.topic = newTopic;
  }

  setChannelState(newChannelState: ChannelState): void {
    this.channelState = newChannelState;
  }

  connect(): void {
    this.driver.connect(this.setConnectionState.bind(this));
  }

  registerHandler(handler: MessageHandler): void {
    this.driver.messageHandlers = addHandlerToList(
      this.driver.messageHandlers,
      handler
    );
  }

  joinChannel(): void {
    if (this.connectionState === "open") {
      this.driver.joinChannel(this.topic, this.setChannelState.bind(this));
    }
  }

  push(
    eventName: string,
    payload: object,
    timeout: number,
    handler: PushHandler
  ): void {
    if (this.channelState === "joined") {
      this.driver.push(eventName, payload, timeout, handler);
    }
  }
}

export default RobertSocket;

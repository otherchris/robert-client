import { ConnectionState } from "phoenix";

export interface Setter<T> {
  (value: T): void;
}

export interface Handler<T> {
  (response: T): void;
}

export interface MessageHandler<okT, errorT, timeoutT> {
  okHandler: Handler<okT>;
  errorHandler: Handler<errorT>;
  timeoutHandler: Handler<timeoutT>;
}

export interface RobertSocketDriver {
  baseUrl: string;
  connect(setter: Setter<ConnectionState>): void;
  joinChannel(topic: string, setter: Setter<ChannelState>): void;
  push(
    eventName: string,
    payload: object,
    timeout: number,
    handler: MessageHandler<string, string, string>
  ): void;
}

export interface RobertSocketConfig {
  driver: RobertSocketDriver;
  topic?: string;
}

export type ChannelState = "joined" | "not joined";

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

  joinChannel(): void {
    if (this.connectionState === "open") {
      this.driver.joinChannel(this.topic, this.setChannelState.bind(this));
    }
  }

  push(
    eventName: string,
    payload: object,
    timeout: number,
    handler: MessageHandler<string, string, string>
  ): void {
    if (this.channelState === "joined") {
      this.driver.push(eventName, payload, timeout, handler);
    }
  }
}

export default RobertSocket;

import { ConnectionState } from "phoenix";

export interface Setter<T> {
  (value: T): void;
}

export interface RobertSocketDriver {
  baseUrl: string;
  connect(setter: Setter<ConnectionState>): void;
  joinChannel(topic: string, setter: Setter<ChannelState>): void;
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
    this.driver.joinChannel(this.topic, this.setChannelState.bind(this));
  }
}

export default RobertSocket;

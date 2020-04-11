import { ConnectionState } from "phoenix";
import {
  RobertSocketDriver,
  Setter,
  ChannelState,
  MessageHandler
} from "./RobertSocket";

interface RobertSocketDriverMockConfig {
  baseUrl: string;
}

class RobertSocketDriverMock implements RobertSocketDriver {
  baseUrl: string;

  constructor(config: RobertSocketDriverMockConfig) {
    this.baseUrl = config.baseUrl;
  }

  // eslint-disable-next-line class-methods-use-this
  connect(update: Setter<ConnectionState>): void {
    update("open");
  }

  // eslint-disable-next-line class-methods-use-this
  joinChannel(topic: string, update: Setter<ChannelState>): void {
    update("joined");
  }

  // eslint-disable-next-line class-methods-use-this
  push(
    eventName: string,
    payload: object,
    timeout: number,
    handler: MessageHandler<string, string, string>
  ): void {
    handler.okHandler("ok message");
  }
}

export default RobertSocketDriverMock;

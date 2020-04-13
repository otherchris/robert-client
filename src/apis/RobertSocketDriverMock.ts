import find from "lodash/find";
import noop from "lodash/noop";
import { ConnectionState } from "phoenix";
import {
  Setter,
  ChannelState,
  MessageHandler,
  PushHandler,
  RobertSocketDriver
} from "./types";

interface RobertSocketDriverMockConfig {
  baseUrl: string;
  messageHandlers: MessageHandler[];
}

class RobertSocketDriverMock implements RobertSocketDriver {
  baseUrl: string;
  messageHandlers: MessageHandler[];

  constructor(config: RobertSocketDriverMockConfig) {
    this.baseUrl = config.baseUrl;
    this.messageHandlers = config.messageHandlers;
  }

  fakeMessage(): void {
    const messageHandler = find(this.messageHandlers, { message: "fake" }) || {
      handler: noop
    };
    messageHandler.handler.apply(this, ["fake message received"]);
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
    handler: PushHandler
  ): void {
    handler.okHandler("ok message");
  }
}

export default RobertSocketDriverMock;

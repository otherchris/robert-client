import { ConnectionState } from "phoenix";
import { Setter, ChannelState, MessageHandler, PushHandler } from "./types";

interface RobertSocketDriverConfig {
  baseUrl: string;
  messageHandlers: MessageHandler[];
}

class RobertSocketDriver {
  baseUrl: string;
  messageHandlers: MessageHandler[];

  constructor(config: RobertSocketDriverConfig) {
    this.baseUrl = config.baseUrl;
    this.messageHandlers = config.messageHandlers;
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

export default RobertSocketDriver;

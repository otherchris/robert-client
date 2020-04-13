import { ConnectionState } from "phoenix";

export type ChannelState = "joined" | "not joined";

export interface Setter<T> {
  (value: T): void;
}

export interface Handler {
  (response: string): void;
}

export interface MessageHandler {
  message: string;
  handler: Handler;
}

export interface PushHandler {
  okHandler: Handler;
  errorHandler: Handler;
  timeoutHandler: Handler;
}

export interface RobertSocketDriver {
  baseUrl: string;
  messageHandlers: MessageHandler[];
  connect(setter: Setter<ConnectionState>): void;
  joinChannel(topic: string, setter: Setter<ChannelState>): void;
  push(
    eventName: string,
    payload: object,
    timeout: number,
    handler: PushHandler
  ): void;
}

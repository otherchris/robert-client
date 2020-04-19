import noop from "lodash/noop";
import { ConnectionState, Channel } from "phoenix";

export const CONNECTION_LATENCY = 10;

interface SocketMockFlags {
  noLatency?: boolean;
}
class SocketMock {
  connState: ConnectionState = "closed";
  openHandler = noop;
  closeHandler = noop;
  noLatency = false;

  constructor(flags: SocketMockFlags) {
    if (flags.noLatency) {
      this.noLatency = true;
    }
  }

  connect(): void {
    this.connState = "connecting";
    if (this.noLatency) {
      this.connState = "open";
      this.openHandler.apply(this);
      return;
    }
    setTimeout(() => {
      this.connState = "open";
      this.openHandler.apply(this);
    }, CONNECTION_LATENCY);
  }

  disconnect(): void {
    this.connState = "closed";
    this.closeHandler.apply(this);
  }

  onOpen(fun: () => void): void {
    this.openHandler = fun;
  }

  onClose(fun: () => void): void {
    this.closeHandler = fun;
  }

  connectionState(): ConnectionState {
    return this.connState;
  }

  // eslint-disable-next-line class-methods-use-this
  channel(s: string, o: object): Channel {
    return new Channel(s, o);
  }
}
export default SocketMock;

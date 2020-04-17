import { ConnectionState } from "phoenix";

class SocketMock {
  connState: ConnectionState = "closed";

  connect() {
    this.connState = "open";
  }
  onOpen(fun: any) {
    fun.apply();
  }
  connectionState() {
    return this.connState;
  }
}

export default SocketMock;
import find from "lodash/find";
import noop from "lodash/noop";
import { MessageHandler } from "./types";
import RobertSocketDriver from "./RobertSocketDriver";

interface RobertSocketDriverMockConfig {
  baseUrl: string;
  messageHandlers: MessageHandler[];
}

class RobertSocketDriverMock extends RobertSocketDriver {
  fakeMessage(): void {
    const messageHandler = find(this.messageHandlers, { message: "fake" }) || {
      handler: noop
    };
    messageHandler.handler.apply(this, ["fake message received"]);
  }
}

export default RobertSocketDriverMock;

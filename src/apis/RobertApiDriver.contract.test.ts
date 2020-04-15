import RobertApiDriverMock from "./RobertApiDriverMock";
import RobertApiDriverReal from "./RobertApiDriverReal";

// When RobertApiDriverReal is implemented, add a fixture here that
// inserts mockUsers. Right now it's hardcoded.

describe("RobertApiDriver contract", () => {
  const mockDriver = new RobertApiDriverMock({});
  const realDriver = new RobertApiDriverReal();

  test("getUsers", async () => {
  });
});

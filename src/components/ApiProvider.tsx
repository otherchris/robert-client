import React from "react";
import { ApiContext } from "../contexts/ApiContext";
import RobertApi from "../apis/RobertApi";
import RobertApiDriverMock from "../apis/RobertApiDriverMock";

const ApiProvider: React.FC = ({ children }) => {
  const apis = {
    restApi: new RobertApi({ driver: new RobertApiDriverMock({}) })
  };
  return <ApiContext.Provider value={apis}>{children}</ApiContext.Provider>;
};

export default ApiProvider;

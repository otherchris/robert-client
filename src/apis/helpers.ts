import filter from "lodash/filter";
import union from "lodash/union";
import { MessageHandler } from "./types";

// eslint-disable-next-line import/prefer-default-export
export const addHandlerToList = (
  list: MessageHandler[],
  handler: MessageHandler
): MessageHandler[] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reducedList: any[] = filter(list, { name: handler.message });
  return union(reducedList, [handler]);
};

import filter from "lodash/fp/filter";
import union from "lodash/fp/union";
import { MessageHandler } from "./types";

// eslint-disable-next-line import/prefer-default-export
export const addHandlerToList = (
  list: MessageHandler[],
  handler: MessageHandler
): MessageHandler[] => {
  const reducedList = filter(list, { name: handler.message });
  return union(reducedList, [handler]);
};

import union from "lodash/union";
import assign from "lodash/fp/assign";
import { Action } from "./Action";

export interface Meeting {
  meetingId: string;
  subjectId: string;
  allowedActions: Action[];
}

export const allowAction = (m: Meeting, a: Action): Meeting => {
  return assign(m, { allowedActions: union(m.allowedActions, [a]) });
};

import { ADD_RIGHTS } from "../actions/addRights";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ADD_RIGHTS:
      return (state = action.payload);
    default:
      return state;
  }
}

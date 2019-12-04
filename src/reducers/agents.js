import { FETCH_AGENT_DETAILS } from "../actions/fetchAgentDetails";

export default function(state = [], action = {}) {
  switch (action.type) {
    case FETCH_AGENT_DETAILS:
      return (state = action.payload);
    default:
      return state;
  }
}

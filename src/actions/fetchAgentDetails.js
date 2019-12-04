import request from "superagent";
import fetchMock from "fetch-mock";
export const FETCH_AGENT_DETAILS = "FETCH_AGENT_DETAILS";

const agentsFetched = agents => ({
  type: FETCH_AGENT_DETAILS,
  payload: agents
});

const baseUrl = "filmgenie.com/api/FilmGenie/GetRightownerAgentsByRightOwnerId";

export const loadAgents = rightOwnerId => dispatch => {
  const url = `${baseUrl}/?id=${rightOwnerId}`;

  // ADD mock fetch
};

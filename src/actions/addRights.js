import request from "superagent";
export const ADD_RIGHTS = "ADD_RIGHTS";

const rightsAdd = rights => ({
  type: ADD_RIGHTS,
  payload: rights
});

const baseUrl = "filmgenie.com/api/FilmGenie/AddRight";

export const addRights = data => dispatch => {
  request
    .post(baseUrl)
    .send(data)
    .then(res => dispatch(rightsAdd(res.body)))
    .catch(error => console.error(error));

  // ADD mock fetch?
};

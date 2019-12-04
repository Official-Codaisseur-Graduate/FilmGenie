import request from "superagent";
import fetchMock from "fetch-mock";

export const loadRightsOwnerFilmList = filmName => (dispatch, getState) => {
  console.log("in loadRightsownerlist", filmName);

  console.log("before fetch");
  fetch("http://filmgenie.com/api/FilmGenie/GetFilmsByRightownerId?id=1")
    .then(response => {
      console.log("RRRRRESPONSE!! ", response.body);
    })
    .then(data => console.log("data:", data))

    .catch(err => console.log("error from api", err));
};

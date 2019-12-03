import request from "superagent";

export const FILMS_FETCHED = "FILMS_FETCHED";

const filmsFetched = films => ({
  type: FILMS_FETCHED,
  payload: films
});

const baseUrl = "filmgenie.com/api/filmgenie/getfilmsbyname";

export const loadFilms = filmName => (dispatch, getState) => {
  //if (getState().films) return;
  const url = `http://${baseUrl}?name=${filmName}`;
  console.log("URL: ", url);
  request
    .get(url)

    .then(response => {
      console.log("RRRRRESPONSE!! ", response);
      dispatch(filmsFetched(response.body));
    })
    .then(
      res => {
        /* responded in time */
      },
      err => {
        if (err.timeout) {
          /* timed out! */
        } else {
          /* other error */
        }
      }
    );
};

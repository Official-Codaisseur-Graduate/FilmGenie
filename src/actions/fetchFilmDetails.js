import request from "superagent";

export const FILMS_FETCHED = "FILMS_FETCHED";

const filmsFetched = films => ({
  type: FILMS_FETCHED,
  films
});

const baseUrl = "filmgenie.com/api/filmgenie/getfilmsbyname";

export const loadFilms = filmName => (dispatch, getState) => {
  if (getState().films) return;

  request(`${baseUrl}/${filmName}`)
    .then(response => {
      dispatch(filmsFetched(response.body));
    })
    .catch(console.error);
};

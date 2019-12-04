import request from "superagent";
import fetchMock from "fetch-mock";
export const FILMS_FETCHED = "FILMS_FETCHED";

const filmsFetched = films => ({
  type: FILMS_FETCHED,
  payload: films
});

const baseUrl = "filmgenie.com/api/filmgenie/getfilmsbyname";

export const loadSearchedFilms = filmName => (dispatch, getState) => {
  //if (getState().films) return;
  const url = `http://${baseUrl}?name=${filmName}`;
  console.log("URL: ", url);
  request.get(url);

  console.log("in loadSearchedFilms", filmName);
  //if (getState().films) return;

  function makeRequest() {
    return fetch(
      "http://filmgenie.com/api/FilmGenie/GetFilmsByName?name=test"
    ).then(function(response) {
      return response.json();
    });
  }
  fetchMock.mock(
    "http://filmgenie.com/api/FilmGenie/GetFilmsByName?name=test",
    [
      {
        filmid: 266,
        primaryTitle: "The Last Godfather",
        tconst: "tt1584131",
        startyear: "2010",
        runtimeminutes: "100",
        originalTitle: "The Last Godfather",
        genres: "Comedy,Crime,Romance",
        isAdult: "0",
        endyear: "\\N",
        right: [],
        screening: []
      },
      {
        filmid: 26379,
        primaryTitle: "Godfather",
        tconst: "tt3270104",
        startyear: "2012",
        runtimeminutes: "145",
        originalTitle: "Godfather",
        genres: "Drama",
        isAdult: "0",
        endyear: "\\N",
        right: [],
        screening: []
      }
    ],
    {
      delay: 1000 // fake a slow network
    }
  );

  makeRequest().then(data => dispatch(filmsFetched(data)));

  //   .then(function(data) {
  //     console.log("got data", data);
  //     filmsFetched(data);
  //   });

  fetch("http://filmgenie.com/api/FilmGenie/GetFilmsByName?name=test");

  /* request(`${baseUrl}/${filmName}`)

    .then(response => {
      console.log("RRRRRESPONSE!! ", response);
      dispatch(filmsFetched(response.body));
    })

    .then(
      res => {
        /* responded in time */
  //   },
  //   err => {
  //     if (err.timeout) {
  //       /* timed out! */
  //     } else {
  //       /* other error */
  //     }
  //   }
  // );

  // .catch(console.error); */
};

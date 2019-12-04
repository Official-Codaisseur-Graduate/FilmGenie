import request from "superagent";
import fetchMock from "fetch-mock";
export const RIGHT_OWNER_FILMS_LOADED = "RIGHT_OWNER_FILMS_LOADED";

const filmsLoaded = films => ({
  type: RIGHT_OWNER_FILMS_LOADED,
  payload: films
});

//New endpoint to be provided
const baseUrl = "filmgenie.com/api/filmgenie/getfilmsforrightowner";

export const loadRightsOwnerFilmList = filmName => (dispatch, getState) => {
  console.log("in loadRightsownerlist", filmName);
  //if (getState().films) return;

  /* function makeRequest() {
    return fetch(
      "http://filmgenie.com/api/FilmGenie/GetFilmsByRightownerId?id=2"
    ).then(function(response) {
      return response.json();
    });
  } */
  /* fetchMock.mock(
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
  ); */

  //makeRequest().then(data => dispatch(filmsFetched(data)));

  //   .then(function(data) {
  //     console.log("got data", data);
  //     filmsFetched(data);
  //   });
  console.log("before fetch");
  fetch("http://filmgenie.com/api/FilmGenie/GetFilmsByRightownerId?id=1")
    /* request(`${baseUrl}/${filmName}`)
     */
    .then(response => {
      console.log("RRRRRESPONSE!! ", response.body);

      //dispatch(filmsFetched(response.body));
    })
    .then(data => console.log("data:", data))
    /*
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

    .catch(err => console.log("error from api", err));
};

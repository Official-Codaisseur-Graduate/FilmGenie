import { SEARCHED_FILMS_FETCHED } from "../actions/fetchFilmDetails";

export default function(state = [], action = {}) {
  console.log("HELLO FILMS FETCHED!!!", action);
  switch (action.type) {
    case SEARCHED_FILMS_FETCHED:
      return (state = action.payload);
    default:
      return state;
  }
}

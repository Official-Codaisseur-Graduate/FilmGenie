import { combineReducers } from "redux";
import films from "./films";
import agents from "./agents";
import rights from "./rights";

export default combineReducers({
  // your reducers will go here
  films,
  agents,
  rights
});

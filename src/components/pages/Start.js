//page 1

import React from "react";
import ChoiceButtons from "../UI/ChoiceButtons";

export default class Start extends React.Component {
 filmAgent = () =>{
   this.props.history.push("/filmAgent/FilmAgentRegistration") //page 2
 }
 cinemaGoer = () => {
   this.props.history.push("/cinemaGoer/CinemaGoerRegistration") //page 3
 }
 render() {
   const choice1 = {
     name: "I am a film agent",
     action: this.filmAgent
   }
   const choice2 = {
     name: "I am a cinema-goer",
     action: this.cinemaGoer
   }
   return (
     <div>
       <ChoiceButtons choice1={choice1} choice2={choice2} />
     </div>
   );
 }
}
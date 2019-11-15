import React from 'react';
import { Route } from "react-router-dom";

// pages
import Start from './components/pages/Start'
import Film from './components/pages/Film'

// pages/filmAgent
import FilmAgentRegistration from './components/pages/filmAgent/FilmAgentRegistration'
import AccessControlContainer from './components/pages/filmAgent/AccessControlContainer'
// pages/filmAgent/newAgent
import NewCinema from './components/pages/filmAgent/newAgent/NewCinema'
import NewCinemaGroup from './components/pages/filmAgent/newAgent/NewCinemaGroup'
import NewCinemaOrCinemaGroup from './components/pages/filmAgent/newAgent/NewCinemaOrCinemaGroup'
import NewFilmAgent from './components/pages/filmAgent/newAgent/NewFilmAgent'
import NewFilmExhibitor from './components/pages/filmAgent/newAgent/NewFilmExhibitor'
import NewFilmFestival from './components/pages/filmAgent/newAgent/NewFilmFestival'
import NewRightOwner from './components/pages/filmAgent/newAgent/NewRightOwner'
// pages/filmAgent/registeredAgent
import RegisteredFilmAgent from './components/pages/filmAgent/registeredAgent/RegisteredFilmAgent'
// pages/filmAgent/registeredAgent/cinema
import Cinema from './components/pages/filmAgent/registeredAgent/cinema/Cinema'
import CinemaAgents from './components/pages/filmAgent/registeredAgent/cinema/CinemaAgents'
import CinemaDetails from './components/pages/filmAgent/registeredAgent/cinema/CinemaDetails'
import CinemaHalls from './components/pages/filmAgent/registeredAgent/cinema/CinemaHalls'
import CinemaProgram from './components/pages/filmAgent/registeredAgent/cinema/CinemaProgram'
import CinemaTicketTypes from './components/pages/filmAgent/registeredAgent/cinema/CinemaTicketTypes'
// pages/filmAgent/registeredAgent/cinemaGroup
import CinemaGroup from './components/pages/filmAgent/registeredAgent/cinemaGroup/CinemaGroup'
import CinemaGroupAgents from './components/pages/filmAgent/registeredAgent/cinemaGroup/CinemaGroupAgents'
import CinemaGroupCinemas from './components/pages/filmAgent/registeredAgent/cinemaGroup/CinemaGroupCinemas'
import CinemaGroupDetails from './components/pages/filmAgent/registeredAgent/cinemaGroup/CinemaGroupDetails'
// pages/filmAgent/registeredAgent/filmFestival
import FilmFestival from './components/pages/filmAgent/registeredAgent/filmFestival/FilmFestival'
import FilmFestivalAgents from './components/pages/filmAgent/registeredAgent/filmFestival/FilmFestivalAgents'
import FilmFestivalDetails from './components/pages/filmAgent/registeredAgent/filmFestival/FilmFestivalDetails'
import FilmFestivalEditions from './components/pages/filmAgent/registeredAgent/filmFestival/FilmFestivalEditions'
import FilmFestivalScreenings from './components/pages/filmAgent/registeredAgent/filmFestival/FilmFestivalScreenings'
// pages/filmAgent/registeredAgent/rightOwner
import RightOwner from './components/pages/filmAgent/registeredAgent/rightOwner/RightOwner'
import RightOwnerAgents from './components/pages/filmAgent/registeredAgent/rightOwner/RightOwnerAgents'
import RightOwnerDetails from './components/pages/filmAgent/registeredAgent/rightOwner/RightOwnerDetails'
import RightOwnerFilms from './components/pages/filmAgent/registeredAgent/rightOwner/RightOwnerFilms'

// pages/cinemaGoer
import CinemaGoerRegistration from './components/pages/cinemaGoer/CinemaGoerRegistration'
import Ticket from './components/pages/cinemaGoer/Ticket'
// pages/cinemaGoer/newCinemaGoer
import NewCinemaGoer from './components/pages/cinemaGoer/newCinemaGoer/NewCinemaGoer'
// pages/cinemaGoer/registeredCinemaGoer
import RegisteredCinemaGoer from './components/pages/cinemaGoer/registeredCinemaGoer/RegisteredCinemaGoer'
import CinemaGoer from './components/pages/cinemaGoer/registeredCinemaGoer/CinemaGoer'
// pages/cinemaGoer/registeredCinemaGoer/films
import Films from './components/pages/cinemaGoer/registeredCinemaGoer/films/Films'
import ScreeningsOfSelectedFilm from './components/pages/cinemaGoer/registeredCinemaGoer/films/ScreeningsOfSelectedFilm'
// pages/cinemaGoer/registeredCinemaGoer/filmScreenings
import Screenings from './components/pages/cinemaGoer/registeredCinemaGoer/filmScreenings/Screenings'
import Tickets from './components/pages/cinemaGoer/registeredCinemaGoer/filmScreenings/Tickets'








function Routes() {
  return (<div>
    {/* first route = page 1, last route = page 40 */}
  
    <Route path="/" exact component={Start} /> 
    <Route path="/filmAgent/FilmAgentRegistration" exact component={FilmAgentRegistration} /> 
    <Route path="/cinemaGoer/CinemaGoerRegistration" exact component={CinemaGoerRegistration} />
    <Route path="/filmAgent/newAgent/NewFilmAgent" exact component={NewFilmAgent} />
    <Route path="/filmAgent/newAgent/NewFilmExhibitor" exact component={NewFilmExhibitor} />
    <Route path="/filmAgent/registeredAgent/RegisteredFilmAgent" exact component={RegisteredFilmAgent} />
    <Route path="/cinemaGoer/registeredCinemaGoer/RegisteredCinemaGoer" exact component={RegisteredCinemaGoer} />
    <Route path="/cinemaGoer/registeredCinemaGoer/CinemaGoer" exact component={CinemaGoer} />
    <Route path="/filmAgent/newAgent/NewRightOwner" exact component={NewRightOwner} />
    <Route path="/filmAgent/newAgent/NewFilmFestival" exact component={NewFilmFestival} />
    <Route path="/filmAgent/newAgent/NewCinemaOrCinemaGroup" exact component={NewCinemaOrCinemaGroup} />
    <Route path="/filmAgent/newAgent/NewCinemaGroup" exact component={NewCinemaGroup} />
    <Route path="/filmAgent/newAgent/NewCinema" exact component={NewCinema} />
    <Route path="/filmAgent/registeredAgent/filmFestival/FilmFestival" exact component={FilmFestival} />
    <Route path="/filmAgent/registeredAgent/filmFestival/FilmFestivalAgents" exact component={FilmFestivalAgents} />
    <Route path="/filmAgent/registeredAgent/filmFestival/FilmFestivalEditions" exact component={FilmFestivalEditions} />
    <Route path="/filmAgent/registeredAgent/cinemaGroup/CinemaGroup" exact component={CinemaGroup} />
    <Route path="/filmAgent/registeredAgent/cinemaGroup/CinemaGroupAgents" exact component={CinemaGroupAgents} />
    <Route path="/filmAgent/registeredAgent/cinemaGroup/CinemaGroupCinemas" exact component={CinemaGroupCinemas} />
    <Route path="/filmAgent/registeredAgent/cinema/Cinema" exact component={Cinema} />
    <Route path="/filmAgent/registeredAgent/cinema/CinemaAgents" exact component={CinemaAgents} />
    <Route path="/filmAgent/registeredAgent/cinema/CinemaProgram" exact component={CinemaProgram} />
    <Route path="/filmAgent/registeredAgent/rightOwner/RightOwner" exact component={RightOwner} />
    <Route path="/filmAgent/registeredAgent/rightOwner/RightOwnerAgents" exact component={RightOwnerAgents} />
    <Route path="/filmAgent/registeredAgent/rightOwner/RightOwnerFilms" exact component={RightOwnerFilms} />
    <Route path="/filmAgent/registeredAgent/rightOwner/RightOwnerDetails" exact component={RightOwnerDetails} />
    <Route path="/filmAgent/registeredAgent/filmFestival/FilmFestivalDetails" exact component={FilmFestivalDetails} />
    <Route path="/filmAgent/registeredAgent/cinemaGroup/CinemaGroupDetails" exact component={CinemaGroupDetails} />
    <Route path="/filmAgent/registeredAgent/cinema/CinemaDetails" exact component={CinemaDetails} />
    <Route path="/filmAgent/registeredAgent/cinema/CinemaHalls" exact component={CinemaHalls} />
    <Route path="/filmAgent/registeredAgent/cinema/CinemaTicketTypes" exact component={CinemaTicketTypes} />
    <Route path="/cinemaGoer/registeredCinemaGoer/filmScreenings/Screenings" exact component={Screenings} />
    <Route path="/filmAgent/registeredAgent/filmFestival/FilmFestivalScreenings" exact component={FilmFestivalScreenings} />
    <Route path="/cinemaGoer/newCinemaGoer/NewCinemaGoer" exact component={NewCinemaGoer} />
    <Route path="/cinemaGoer/registeredCinemaGoer/filmScreenings/Tickets" exact component={Tickets} />
    <Route path="/cinemaGoer/registeredCinemaGoer/films/ScreeningsOfSelectedFilm" exact component={ScreeningsOfSelectedFilm} />
    <Route path="/cinemaGoer/registeredCinemaGoer/films/Films" exact component={Films} />
    <Route path="/filmAgent/AccessControlContainer" exact component={AccessControlContainer} />
    <Route path="/cinemaGoer/Ticket" exact component={Ticket} />
    <Route path="/Film" exact component={Film} />
  </div>);
}

export default Routes;

import React from 'react';
import { Route } from "react-router-dom";

// pages
import Start from './components/pages/Start'
import Film from './components/pages/Film'

// pages/filmAgent
import FilmAgentRegistration from './components/pages/filmAgent/FilmAgentRegistration'
import AccessControl from './components/pages/filmAgent/AccessControl'
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
import FilmFestivalAgents from './components/pages/filmAgent/registeredAgent/filmFestival/FilmFestival'
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
    <Route path="/1" exact component={Start} />
    <Route path="/2" exact component={FilmAgentRegistration} />
    <Route path="/3" exact component={CinemaGoerRegistration} />
    <Route path="/4" exact component={NewFilmAgent} />
    <Route path="/5" exact component={NewFilmExhibitor} />
    <Route path="/6" exact component={RegisteredFilmAgent} />
    <Route path="/7" exact component={RegisteredCinemaGoer} />
    <Route path="/8" exact component={CinemaGoer} />
    <Route path="/9" exact component={NewRightOwner} />
    <Route path="/10" exact component={NewFilmFestival} />
    <Route path="/11" exact component={NewCinemaOrCinemaGroup} />
    <Route path="/12" exact component={NewCinemaGroup} />
    <Route path="/13" exact component={NewCinema} />
    <Route path="/14" exact component={FilmFestival} />
    <Route path="/15" exact component={FilmFestivalAgents} />
    <Route path="/16" exact component={FilmFestivalEditions} />
    <Route path="/17" exact component={CinemaGroup} />
    <Route path="/18" exact component={CinemaGroupAgents} />
    <Route path="/19" exact component={CinemaGroupCinemas} />
    <Route path="/20" exact component={Cinema} />
    <Route path="/21" exact component={CinemaAgents} />
    <Route path="/22" exact component={CinemaProgram} />
    <Route path="/23" exact component={RightOwner} />
    <Route path="/24" exact component={RightOwnerAgents} />
    <Route path="/25" exact component={RightOwnerFilms} />
    <Route path="/26" exact component={RightOwnerDetails} />
    <Route path="/27" exact component={FilmFestivalDetails} />
    <Route path="/28" exact component={CinemaGroupDetails} />
    <Route path="/29" exact component={CinemaDetails} />
    <Route path="/30" exact component={CinemaHalls} />
    <Route path="/31" exact component={CinemaTicketTypes} />
    <Route path="/32" exact component={Screenings} />
    <Route path="/33" exact component={FilmFestivalScreenings} />
    <Route path="/34" exact component={NewCinemaGoer} />
    <Route path="/35" exact component={Tickets} />
    <Route path="/36" exact component={ScreeningsOfSelectedFilm} />
    <Route path="/37" exact component={Films} />
    <Route path="/38" exact component={AccessControl} />
    <Route path="/39" exact component={Ticket} />
    <Route path="/40" exact component={Film} />
  </div>);
}

export default Routes;

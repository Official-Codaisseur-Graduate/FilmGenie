// page 40

import React from 'react'
// import CountryList from '../lists/CountryList'
// import YearsList from '../lists/YearsList'
// import GenresList from '../lists/GenresList'


export default class FilmForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img 
            src="https://m.media-amazon.com/images/M/MV5BNTdmMDM0NGEtM2M4Ni00MGU1LWE0NDQtYjgxNzUwNGM5YjcwXkEyXkFqcGdeQXVyMTQ4OTk3MzM@._V1_.jpg" 
            alt="movie-poster"
            />
        </div>
        <div>
          <h5>Title</h5>
          <p>You Go To My Head</p>
          <h5>Director</h5>
          <p>Dimitri de Clercq</p>
          <h5>Year</h5>
          <p>2017</p>
          <h5>Country</h5>
          <p>France, Germany, Belgium</p>
          <h5>Actors</h5>
          <p>Delfine Bafort, Svetozar Cvetkovic, Arend Pinoy, Omar Sarnane, Laurence Trémolet</p>
          <h5>Genres</h5>
          <p>Drama, Fantasy, Mystery, Romance, Thriller</p>
          <h5>Running time</h5>
          <p>116 minutes</p>
          <h5>Other info</h5>
          <p><a href='http://yougotomyhead.com/'>Official Site</a></p>
          <h5>IMDB info</h5>
          <p>Following a mysterious car accident in the desert, Dafne suffers from post-traumatic amnesia. Jake, the first person she sees when she regains consciousness, tells her he's her husband.</p>
          <button><a href="https://www.imdb.com/videoplayer/vi1143650329?playlistId=tt7662752&ref_=tt_ov_vi">IMDB trailer</a></button>
          <form>
            <label> Local Info
              <input type='text' name='local_info' placeholder='Local Info'></input>
            </label>
            <label> Territory
              <CountryList />
            </label>
            <button className="to-side-right">local trailer</button>
          </form>
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Home.css';

import axios from 'axios'
import {apiURL, apiKey} from '../../config.js'
import { faList, faImage, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      movieList: [],
      genreList: [],
      currGenre: 0,
    };
  }

  componentDidMount() {
    this.getGenre();
    this.getMovie();
  }

  getMovie() {
    // console.log(apiURL, apiKey);
    axios.get(`${apiURL}/movie/popular${apiKey}&language='en-us'`).then((response) => {
        // console.log(response.data.results);
        this.setState({
          movieList: response.data.results,
          currGenre: 0
        });
      }).catch((error) => {
        console.log(error);
    });
  }

  getGenre() {
    // console.log(apiURL, apiKey);
    axios.get(`${apiURL}/genre/movie/list${apiKey}&language='en-us'`).then((response) => {
        // console.log(response.data.genres);
        this.setState({
          genreList: response.data.genres,
        });
      }).catch((error) => {
        console.log(error);
    });
  }

  getMovieByGenre(ob) {
    axios.get(`${apiURL}/discover/movie${apiKey}&language='en-us'&with_genres=${ob.id}`).then((response) => {
        // console.log(response.data.results);
        this.setState({
          movieList: response.data.results,
          currGenre: ob.id
        });
      }).catch((error) => {
        console.log(error);
    });
    // console.log(this.state.currGenre);
  }

  toggleClass() {
    const cur = this.state.active;
    this.setState({ active: !cur});
  }

  render() {
    const genres = this.state.genreList.map((genre, index)=> {
      return (
        <div className={this.state.currGenre === genre.id ? 'active genre' : 'genre'} onClick={() => this.getMovieByGenre(genre)} key={ genre.id }>
          <p className='genre-name'> { genre.name }</p>
        </div>
      )
    });

    const imgURL= 'http://image.tmdb.org/t/p/original';
    const movies= this.state.movieList.map((movie, index)=> {
      return (
        <div className='gallery-item' key={ index }>
            <img className='poster' src={ imgURL + movie.poster_path } alt='movie poster'></img>
            <div className='tag'>
              <h3 className='movie-name'>{ movie.original_title }</h3>
              <p className='movie-rating'>{ movie.vote_average }/10</p>
            </div>
        </div>
        )
      });

      return(
        <div className='Home'>
          <div className='header'>
            <img className='logo' src='https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png' alt='logo'></img>
            <h1 className='title'>Fancy Movies</h1>
            <div className="toggle-container">
              <Link to="/">
                <Button
                  title="Gallery View"
                  className={window.location.pathname==='/' ? "toggle-active": ""}>
                  <FontAwesomeIcon className="toggle-icon" icon={faImage} size="2x" />
                </Button>
              </Link>
              <Link to="/list">
                <Button
                  title="List View"
                  className={window.location.pathname==='/list' ? "toggle-active": ""}>
                <FontAwesomeIcon className="toggle-icon" icon={faList} size="2x" />
                </Button>
              </Link>
            </div>
          </div>
          <div className='search-container'>
            <div className='search-bar'>
              <FontAwesomeIcon className='search-icon' icon={faSearch} size="2x" />
              <input type="text" placeholder="Search Movies" className="search-input" />
            </div>
          </div>
          <div className='sort-container-1'>
            <p>Rating:&nbsp;</p>
            <form className='sort-form'>
              <select className='sort-rating'>
                <option>Asending</option>
                <option>Desending</option>
              </select>
            </form>
          </div>
          <div className='sort-container-2'>
            <p>Popularity:&nbsp;</p>
            <form className='sort-form'>
              <select className='sort-pop'>
                <option>Asending</option>
                <option>Desending</option>
              </select>
            </form>
          </div>
          <div className="filter-list">
            <div className="genre-list">
              <h3> Genre </h3>
              <div className={this.state.currGenre === 0 ? 'active genre' : 'genre'} onClick={() => this.getMovie()} key={ 0 }>
                <p className='genre-name'> All Genres</p>
              </div>
              {genres}
            </div>
          </div>
          <div className='gallery'>
            { movies }
          </div>
        </div>
    )

  }
}

export default Home

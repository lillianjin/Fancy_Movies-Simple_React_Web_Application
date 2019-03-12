import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Button, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Home.css';
import Details from '../Details/Details.jsx';
import PropTypes from 'prop-types';

import axios from 'axios'
import {apiURL, apiKey} from '../../config.js'
import { faStar, faList, faImage, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      movieList: [],
      genreList: [],
      currGenre: 0,
    };

    this.getMovie = this.getMovie.bind(this);
    this.getGenre = this.getGenre.bind(this);
    this.getMovieByGenre = this.getMovieByGenre.bind(this)
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
  }


  render() {
    const genres = this.state.genreList.map((genre, index)=> {
      return (
        <div className={this.state.currGenre === genre.id ? 'active genre' : 'genre'} onClick={() => this.getMovieByGenre(genre)} key={ genre.id }>
          <p className='genre-name'> { genre.name }</p>
        </div>
      )
    });

    const imgURL= 'https://image.tmdb.org/t/p/original';
    const movieList = this.state.movieList;
    console.log(movieList);
    const movies= movieList.map((movie, index)=> {
      return (
        <div className="item-wrapper" key = { index }>
          <Link to={
            {
              pathname: `/details/${ index }`,
              state: {
                movieList: movieList,
              }
            }
          }
            className='gallery-item'
            key={ movie.id }>
              <img className='poster' src={ imgURL + movie.poster_path } alt='movie poster'></img>
              <div className='tag'>
                <h3 className='movie-name'>{ movie.original_title }</h3>
                <p className='movie-rating'>
                <FontAwesomeIcon icon={faStar} size="sm" />
                &nbsp;{ movie.vote_average }/10
                </p>
              </div>
          </Link>
        </div>
        )
      });

      return(
        <div className='Home'>
          <div className='header'>
          <Link to = '/'>
            <img className='logo' src='https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png' alt='logo'></img>
          </Link>
          <h1 className='title'>Fancy Movies</h1>
          <div className="toggle-container">
            <Link to="/">
              <Button
                title="Gallery View"
                className={window.location.pathname==='/' ? "toggle-active toggle-button": "toggle-button"}>
                <FontAwesomeIcon className="toggle-icon" icon={faImage} size="2x" />
              </Button>
            </Link>
            <Link to="/list">
              <Button
                title="List View"
                className={window.location.pathname==='/list' ? "toggle-active toggle-button": "toggle-button"}>
              <FontAwesomeIcon className="toggle-icon" icon={faList} size="2x" />
              </Button>
            </Link>
          </div>
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

Home.propTypes = {

}

export default Home

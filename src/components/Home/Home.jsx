import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Home.css';

import axios from 'axios'
import {apiURL, apiKey} from '../../config.js'


class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      movieList: [],
      genreList: [],
    };
  }

  getMovie() {
    // console.log(apiURL, apiKey);
    axios.get(`${apiURL}/movie/popular${apiKey}`).then((response) => {
        // console.log(response.data.results);
        this.setState({
          movieList: response.data.results
        });
      }).catch((error) => {
        console.log(error);
    });
  }

  getGenre() {
    // console.log(apiURL, apiKey);
    axios.get(`${apiURL}/genre/movie/list${apiKey}&language=en-US`).then((response) => {
        // console.log(response.data.genres);
        this.setState({
          genreList: response.data.genres
        });
      }).catch((error) => {
        console.log(error);
    });
  }

  render() {
    this.getMovie();
    this.getGenre();
    const genres = this.state.genreList;
    console.log(this.state.movieList);
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
          </div>
          <div className="filter-list">
            <div className="genre-list">
              <h3> Genre </h3>
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

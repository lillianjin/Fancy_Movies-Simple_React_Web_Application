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
    };
  }

  getMovie() {
    // console.log(apiURL, apiKey);
    axios.get(`${apiURL}/movie/popular${apiKey}`).then((response) => {
        console.log(response.data.results);
        this.setState({
          movieList: response.data.results
        });
      }).catch((error) => {
        console.log(error);
    });
  }


  render() {
    this.getMovie();
    const imgURL= 'http://image.tmdb.org/t/p/original';
    const movies= this.state.movieList.map((movie, index)=> {
      return (
        <div className='gallery-item' key={ index }>
            <img style={{ height: '85%', width: '100%' }} src={ imgURL + movie.poster_path } alt='movie poster'></img>
            <h3>{ movie.original_title }</h3>
            <p>Rating: { movie.vote_average }/10</p>
          </div>
        )
      });

      return(
      <div className='gallery'>
        { movies }
      </div>
    )

  }
}

export default Home

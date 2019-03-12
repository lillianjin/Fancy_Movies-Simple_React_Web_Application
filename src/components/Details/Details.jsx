import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Details.css';

import axios from 'axios'
import {apiURL, apiKey} from '../../config.js'
import { faList, faImage, faStar, faArrowAltCircleRight, faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
      curr_index: 0,
      tot_index: 0,
      movieList: [],
      title: "",
      poster: "",
      overview: "",
      date: "",
      rating: 0
    };
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    // console.log(apiURL, apiKey);
    const index = parseInt(this.props.match.params.index);
    const content = this.props.location.state.movieList;
    const cur = content[index];
    console.log(cur);
    this.setState({
      curr_index: index,
      tot_index: content.length,
      movieList: content,
      title: cur.title,
      poster: cur.poster_path,
      overview: cur.overview,
      date: cur.release_date,
      rating: cur.vote_average
    });
  }

  preview() {
    const curr = this.state.curr_index;
    const tot = this.state.tot_index;
    var i = curr>0 ? curr - 1 : tot-1;
    return i;
  }

  nextview() {
    const curr = this.state.curr_index;
    const tot = this.state.tot_index;
    var i = curr < tot-1 ? curr + 1 : 0;
    return i;
  }

  render() {
    const imgURL= 'https://image.tmdb.org/t/p/original';
      return(
        <div className='Details'>
          <div className='header'>
            <img className='logo' src='https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png' alt='logo'></img>
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
          <div className='detail-container'>
            <Link to={
              {
                pathname: `/details0/${ this.preview() }`,
                state: {
                  movieList: this.state.movieList,
                }
              }
            }>
              <div className="arrow-left">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
              </div>
            </Link>
            <img className='detail-poster' src={ imgURL + this.state.poster } alt='movie poster'></img>
            <div className='detail-tag'>
              <h2 className='detail-name'>
                {this.state.title}
              </h2>
              <p className='detail-ab'>Release Date:&nbsp;</p>
              <p className='detail-date'>
                {this.state.date}
              </p>
              <p className='detail-ab'>Rating:&nbsp;</p>
              <p className='detail-rating'>
                {this.state.rating}/10
              </p>
              <p className='detail-ab'>Overview:&nbsp;</p>
              <p className='detail-overview'>
                {this.state.overview}
              </p>
            </div>
            <Link to={
              {
                pathname: `/details0/${ this.nextview() }`,
                state: {
                  movieList: this.state.movieList,
                }
              }
            }>
              <div className="arrow-right">
              <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
              </div>
            </Link>
          </div>
        </div>
    )

  }
}

export default Details

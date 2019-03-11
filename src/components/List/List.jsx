import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './List.css';

import axios from 'axios'
import {apiURL, apiKey} from '../../config.js'
import { faStar, faList, faImage, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      cur_res: 0,
      cur_page: 0,
      total_res: 0,
      total_page: 0,
      movieList: [],
      keyword: "",
      sort_by: "title",
      order: "asc"
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.sortChange = this.sortChange.bind(this);
    this.orderChange = this.orderChange.bind(this);
    this.sortByTitle = this.sortByTitle.bind(this);
    this.sortByNum = this.sortByNum.bind(this);
  }

  componentDidMount() {
    this.getPopularMovie();
  }

  getPopularMovie() {
    // console.log(apiURL, apiKey);
    axios.get(`${apiURL}/movie/popular${apiKey}&language='en-us'`).then((response) => {
        // console.log(response.data.results);
        this.setState({
          total_res: response.data.total_results,
          movieList: response.data.results,
          cur_res: response.data.results.length,
        });
      }).catch((error) => {
        console.log(error);
    });
  }

  inputChangeHandler(event) {
    this.setState({
      keyword: event.target.value,
    });
    // console.log(this.state.keyword);
  }

  sortByNum(a, b, order, attr){
    const diff = attr==='vote_average' ? (a.vote_average - b.vote_average) : (a.popularity - b.popularity);
    if(order === 'asc'){
      return diff;
    } else {
      return -1 * diff;
    }
  }

  sortByTitle(a, b, order){
    const diff = a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    if(order === 'asc'){
      return diff;
    } else {
      return -1 * diff;
    }
  }


  clickHandler(){
    axios.get(`${apiURL}/search/movie${apiKey}&query=${this.state.keyword}&language='en-us'`).then((response) => {
      console.log(response.data.results);
      this.setState({
        movieList: response.data.results,
        total_res: response.data.total_results,
        cur_res: response.data.results.length,
        total_page: response.data.total_pages,
        cur_page: response.data.page,
      });
      if(this.state.sort_by === 'title'){
        const newList = this.state.movieList.sort((a, b) => this.sortByTitle(a, b, this.state.order));
        this.setState({
          movieList: newList,
        });
      } else {
        const newList = this.state.movieList.sort((a, b) => this.sortByNum(a, b, this.state.order, this.state.sort_by));
        this.setState({
          movieList: newList,
        });
      }
      console.log(this.state.movieList);
      }).catch((error) => {
        console.log(error);
    });
  }

  orderChange(event){
    this.setState({
      order: event.target.value,
    });
  }

  sortChange(event){
    // console.log(event.target.value);
    this.setState({
      sort_by: event.target.value,
    });
  }

  render() {
    const imgURL= 'http://image.tmdb.org/t/p/original';
    const totalCount = this.state.total_res;

    const movies= this.state.movieList.map((movie, index)=> {
      return (
        <Link to={
          {
            pathname: `/details/${ index }`,
            state: {
              movieList: this.state.movieList,
            }
          }
        }
          className='list-item'
          key={ movie.id }>
            <img className='list-poster' src={ imgURL + movie.poster_path } alt='movie poster'></img>
            <div className='list-tag'>
              <h3 className='list-movie-name'>{ movie.title }</h3>
              <p className='list-movie-date'>
                {movie.release_date}
              </p>
              <p className='list-movie-rating'>
                <FontAwesomeIcon icon={faStar} size="sm" />
                &nbsp;{ movie.vote_average }/10
              </p>
              <p className='list-movie-overview'>
                { movie.overview }
              </p>
            </div>
          </Link>
        )
      });


      return(
        <div className='List'>
          <div className='header'>
          <Link to = '/list'>
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
          <div className='search-container'>
            <div className='search-bar'>
              <FontAwesomeIcon className='search-icon' icon={faSearch} size="2x" />
              <input
                type="text"
                onChange = {this.inputChangeHandler}
                placeholder="Search Movies"
                className="search-input"
              />
            </div>
            <input
              className="search-submit"
              onClick = {this.clickHandler}
              type="button"
              value="Submit"
            />
          </div>
          <div className='sort-container-1'>
            <p className='sort-word'>Sort&nbsp;by:&nbsp;</p>
            <form className='sort-form'>
              <select onChange= {this.sortChange}>
                <option value='title'>Title</option>
                <option value='vote_average'>Rating</option>
                <option value='popularity'>Popularity</option>
              </select>
            </form>
          </div>
          <div className='total_res'>{ this.state.cur_res }&nbsp;of&nbsp;{ this.state.total_res }&nbsp;results</div>
          <div className='sort-container-2'>
            <p className='sort-word'>Order:&nbsp;</p>
            <form className='sort-form'>
              <select onChange={this.orderChange}>
                <option value='asc'>Asending</option>
                <option value='desc'>Desending</option>
              </select>
            </form>
          </div>
          <div className='list'>
            { movies }
          </div>
        </div>
    )
  }
}

List.propTypes = {

}

export default List

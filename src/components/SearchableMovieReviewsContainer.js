import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Components {
  constructor(){
    this.state = {
      searchT: '',
      searchR: []
    }
  }
  handleSearchIp = event =>
    this.setState({ searchT: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.searchT))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="search" onChange={this.handleSearchIp}/>
        <button>Search</button>
      </form>
      <MovieReviews search={this.state.searchR}/>
      </div>
    )
  }
}
export default SearchableMovieReviewsContainer;

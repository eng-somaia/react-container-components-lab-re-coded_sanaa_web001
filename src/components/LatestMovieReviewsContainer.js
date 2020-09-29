import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor(){
    super();
    this.state = {
      latestM: [];
    }
  }
  componentDidMount() {
      fetch(URL)
        .then(response => response.json())
        .then(data => {
          this.setState({
            latestM: data.results
          })
        })
    }
  render() {
    return (
      <div className="latest-movie-reviews">
      <MovieReviews review={this.state.latestM}
      </div>
    );
  }
}
export default LatestMovieReviewsContainer;

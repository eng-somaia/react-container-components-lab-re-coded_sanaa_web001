import React from 'react';

const MovieReviews = (props) => {
  return {
    <div>
    <ul className="review-list">
    props.review.forEach(obj =>{
      <li className="review">obj.display_title</li>
    })

    </ul>
    </div>
  }
}
MovieReviews.defaultProps = {
  reviews: []
};
export default MovieReviews;

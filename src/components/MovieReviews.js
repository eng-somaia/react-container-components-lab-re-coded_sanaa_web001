import React from 'react';

const MovieReviews = (props) => {
  return {
    <div>
    <ul className="review-list">
    props.result.forEach(obj =>{
      <li className="review">obj.display_title</li>
    })

    </ul>
    </div>
  }
}
export default MovieReviews;

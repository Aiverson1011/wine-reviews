import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../store/review-actions';

function ReviewList({currentReviews, pageNumber, resultsCount}) {
  console.log('currentReviews:', currentReviews);

  let reviewsToShow = [];

  let pageEnd = pageNumber + 1 * resultsCount;

 
  for(let i = pageNumber * resultsCount; i < pageEnd; i++) {
    if (currentReviews[i]) {
      reviewsToShow.push(<p key={`review-${i}`}>{currentReviews[i].title}</p>);
    }
  }


  return (
    <>
      <h1>Review List</h1>
      {reviewsToShow}
    </>
  )
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    get: (data) => dispatch( actions.get(data)),
  }
}

const mapStateToProps = (state) => {
  return {
    currentReviews: state.reviews.currentReviews,
    pageNumber: state.reviews.pageNumber,
    resultsCount: state.reviews.resultsCount,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
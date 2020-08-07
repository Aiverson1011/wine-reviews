import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../store/review-actions';

function ReviewList(props) {

  return (
    <>
      <h1>Review List</h1>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
import React from 'react';
import {connect} from 'react-redux';

function Header(props) {

  return (
    <>
      <h1>Header Stuff</h1>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentReviews: state.reviews.currentReviews,
    countries: state.reviews.countries
  }
}

export default connect(mapStateToProps)(Header);
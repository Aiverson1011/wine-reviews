import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import * as actions from './store/review-actions';

import Header from './components/header';
import ReviewList from './components/review-list';
import Search from './components/search';


function App({get}) {


  useEffect(() => {
    get();
  }, [get]);
  
  return (
    <>
        <Header />
        <Search />
        <ReviewList />
    </>
  );
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    get: (data) => dispatch( actions.get(data) ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

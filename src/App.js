import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import * as actions from './store/review-actions';

import Header from './components/header';
import ReviewList from './components/review-list';


function App({get}) {


  useEffect(() => {
    get();
  }, [get]);
  
  return (
    <>
        <Header />
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

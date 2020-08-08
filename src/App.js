import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import * as actions from './store/review-actions';

import Header from './components/header';
import ReviewList from './components/review-list';
import Search from './components/search';


function App({get, loading}) {

  

  useEffect(() => {
    get();
  }, [get]);

  const styles = {
    appFlex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
  
  return (
    <div style={styles.appFlex}>
        {
          !loading && 
          <Header /> &&
          <Search /> &&
          <ReviewList />
        }

        {loading && <h1>Loading Reviews...</h1>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.reviews.loading
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    get: (data) => dispatch( actions.get(data) ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

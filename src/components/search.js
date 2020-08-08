import React from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';

import * as actions from '../store/review-actions';

function Search(props) {

  function handleSearch(e) {
    e.preventDefault();

    let query = e.target.search.value;
    console.log('query:', query);
    if (query) {
      props.filterResults(e.target.search.value);
    }
    e.target.reset();
  }

  function handleCountChange(e) {
    props.setResultsCount(e.target.value);
  }

  const styles = {
    search: {
      width: '100%',
      display: 'flex'
    }
  }

  return (
    <div>
      <form onSubmit={ handleSearch } style={{display: 'inline'}}>
        <label htmlFor="search">Filters: </label>
        <input type='text' name='search' placeholder='search term'/>
        <Button 
          color='primary'
          type='submit'
        >
          SEARCH
        </Button>
      </form>
      <select name="resultsCount" id="resultsCount" onChange={handleCountChange}>
        <option default value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
      </select>
    </div>
  )
};


const mapStateToProps = (state) => {
  return {
    resultsCount: state.reviews.resultsCount,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    setResultsCount: (data) => { dispatch(actions.setResultsCount(data) ) },
    filterResults: (data) => { dispatch(actions.filterResults(data) ) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
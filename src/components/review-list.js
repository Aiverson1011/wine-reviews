import React from 'react';
import {connect} from 'react-redux';
import {Button, ButtonGroup} from '@material-ui/core'

import * as actions from '../store/review-actions';

function ReviewList({currentReviews, pageNumber, resultsCount, setPageNumber}) {
  console.log('currentReviews:', currentReviews);

  let reviewsToShow = [];

  let pageStart = pageNumber * resultsCount;
  let pageEnd = pageStart + resultsCount - 1;
  
  const styles = {
    table: {
      width: '100%',
    },
     
  }

  
 
  for(let i = pageStart; i <= pageEnd; i++) {
    
    if (currentReviews[i]) {
      reviewsToShow.push(<tr key={`review-${i}`}>
        <td>{currentReviews[i].title}</td>
        <td>{currentReviews[i].variety}</td>
        <td>{currentReviews[i].winery}</td>
        <td>{currentReviews[i].points}</td>
        <td>{currentReviews[i].price}</td>
        <td>{currentReviews[i].tasterName}</td>
      </tr>);
      
    }
  }


  return (
    <>
      <h1>Review</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Variety</th>
            <th>Winery</th>
            <th>Points</th>
            <th>Price</th>
            <th>Taster</th>
          </tr>
        </thead>
        <tbody>
          {reviewsToShow} 
        </tbody>
      </table>
      {reviewsToShow.length > 0 && 
      <ButtonGroup
        variant='text'
        color='primary'
        aria-label='text primary button group'
        className='button-group'
      >

        <Button 
          disabled={pageNumber < 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          {'<<'}
        </Button>

        <Button 
          disabled
        >
          {pageNumber + 1}
        </Button>

        {!(pageEnd >= currentReviews.length - 1) && 
        <Button
          onClick={() => setPageNumber(pageNumber + 2)}
          disabled={pageEnd >= currentReviews.length - 1}

        >
          {pageNumber + 2}
        </Button>
        }

        { !(pageEnd >= currentReviews.length - 1) && 
        <Button
          onClick={() => setPageNumber(pageNumber + 3)}

        >
          {pageNumber + 3}
        </Button>
        }

        <Button
          disabled={pageEnd >= currentReviews.length - 1}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          {'>>'}
        </Button>
      </ButtonGroup>}
    </>
  )
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    get: (data) => dispatch( actions.get(data) ),
    setPageNumber: (data) => dispatch (actions.setPageNumber(data) )
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
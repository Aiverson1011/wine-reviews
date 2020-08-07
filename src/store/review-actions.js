import axios from 'axios';

export const get = () => async dispatch => {
  console.log('fetching...')
  let results = await axios.get('https://lightninglaw.azurewebsites.net/api/reviews');
  console.log('axios results:', results);
  dispatch(getAllReviews(results.data));
  dispatch(setCountries(results.data));
  console.log('done fetching');
}

export const getAllReviews = (payload) => {
  return {
    type: 'GET_REVIEWS',
    payload
  }
}

export const setCountries = (payload) => {
  return {
    type: 'SET_COUNTRIES',
    payload
  }
}
export const initState = {
  allReviews: [],
  currentReviews: [],
  currentCountry: '',
  resultsCount: 10,
  pageNumber: 0,
  countries: {}
}

export default (state = initState, action) => {
  let newState = { ...state}
  const {type, payload} = action;

  switch(type) {
    case 'GET_REVIEWS':
      newState.allReviews = [...payload];
      break;
    case 'SET_COUNTRIES':
      let countryMap = populateCountries(payload);
      newState.countries = {...countryMap};
      break;
    case 'SET_CURRENT':
      newState.currentCountry = payload;
      console.log('!?!?!',newState.countries[newState.currentCountry]);
      newState.currentReviews = [...newState.countries[newState.currentCountry]];
      break;
    default:
      break;
  }

  return newState;
}

function populateCountries(arr) {

  console.log('populate countries arr:', arr);
  const countries = {};

  arr.forEach(item => {
    let country = item.country;
    if (countries[country]) {
      countries[country] = [...countries[country], item];
    } else {
      countries[country] = [item];
    }
  });

  return countries;
}
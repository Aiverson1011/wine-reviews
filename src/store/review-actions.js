import axios from 'axios';

let dummyData = [
  {
    "country": "Italy",
    "designation": "Vulkà Bianco",
    "points": 87,
    "price": null,
    "province": "Sicily & Sardinia",
    "tasterName": "Kerin O’Keefe",
    "title": "Nicosia 2013 Vulkà Bianco  (Etna)",
    "variety": "White Blend",
    "winery": "Nicosia"
  },
  {
    "country": "Portugal",
    "designation": "Avidagos",
    "points": 87,
    "price": "15",
    "province": "Douro",
    "tasterName": "Roger Voss",
    "title": "Quinta dos Avidagos 2011 Avidagos Red (Douro)",
    "variety": "Portuguese Red",
    "winery": "Quinta dos Avidagos"
  },
  {
    "country": "US",
    "designation": null,
    "points": 87,
    "price": "14",
    "province": "Oregon",
    "tasterName": "Paul Gregutt",
    "title": "Rainstorm 2013 Pinot Gris (Willamette Valley)",
    "variety": "Pinot Gris",
    "winery": "Rainstorm"
  },
  {
    "country": "US",
    "designation": "Reserve Late Harvest",
    "points": 87,
    "price": "13",
    "province": "Michigan",
    "tasterName": "Alexander Peartree",
    "title": "St. Julian 2013 Reserve Late Harvest Riesling (Lake Michigan Shore)",
    "variety": "Riesling",
    "winery": "St. Julian"
  },
  {
    "country": "US",
    "designation": "Vintner's Reserve Wild Child Block",
    "points": 87,
    "price": "65",
    "province": "Oregon",
    "tasterName": "Paul Gregutt",
    "title": "Sweet Cheeks 2012 Vintner's Reserve Wild Child Block Pinot Noir (Willamette Valley)",
    "variety": "Pinot Noir",
    "winery": "Sweet Cheeks"
  },
  {
    "country": "Spain",
    "designation": "Ars In Vitro",
    "points": 87,
    "price": "15",
    "province": "Northern Spain",
    "tasterName": "Michael Schachner",
    "title": "Tandem 2011 Ars In Vitro Tempranillo-Merlot (Navarra)",
    "variety": "Tempranillo-Merlot",
    "winery": "Tandem"
  },
  {
    "country": "Italy",
    "designation": "Belsito",
    "points": 87,
    "price": "16",
    "province": "Sicily & Sardinia",
    "tasterName": "Kerin O’Keefe",
    "title": "Terre di Giurfo 2013 Belsito Frappato (Vittoria)",
    "variety": "Frappato",
    "winery": "Terre di Giurfo"
  },
  {
    "country": "France",
    "designation": null,
    "points": 87,
    "price": "24",
    "province": "Alsace",
    "tasterName": "Roger Voss",
    "title": "Trimbach 2012 Gewurztraminer (Alsace)",
    "variety": "Gewürztraminer",
    "winery": "Trimbach"
  },
  {
    "country": "Germany",
    "designation": "Shine",
    "points": 87,
    "price": "12",
    "province": "Rheinhessen",
    "tasterName": "Anna Lee C. Iijima",
    "title": "Heinz Eifel 2013 Shine Gewürztraminer (Rheinhessen)",
    "variety": "Gewürztraminer",
    "winery": "Heinz Eifel"
  },
  {
    "country": "France",
    "designation": "Les Natures",
    "points": 87,
    "price": "27",
    "province": "Alsace",
    "tasterName": "Roger Voss",
    "title": "Jean-Baptiste Adam 2012 Les Natures Pinot Gris (Alsace)",
    "variety": "Pinot Gris",
    "winery": "Jean-Baptiste Adam"
  },
  {
    "country": "US",
    "designation": "Mountain Cuvée",
    "points": 87,
    "price": "19",
    "province": "California",
    "tasterName": "Virginie Boone",
    "title": "Kirkland Signature 2011 Mountain Cuvée Cabernet Sauvignon (Napa Valley)",
    "variety": "Cabernet Sauvignon",
    "winery": "Kirkland Signature"
  },
  {
    "country": "France",
    "designation": null,
    "points": 87,
    "price": "30",
    "province": "Alsace",
    "tasterName": "Roger Voss",
    "title": "Leon Beyer 2012 Gewurztraminer (Alsace)",
    "variety": "Gewürztraminer",
    "winery": "Leon Beyer"
  },
  {
    "country": "US",
    "designation": null,
    "points": 87,
    "price": "34",
    "province": "California",
    "tasterName": "Virginie Boone",
    "title": "Louis M. Martini 2012 Cabernet Sauvignon (Alexander Valley)",
    "variety": "Cabernet Sauvignon",
    "winery": "Louis M. Martini"
  },
  {
    "country": "Italy",
    "designation": "Rosso",
    "points": 87,
    "price": null,
    "province": "Sicily & Sardinia",
    "tasterName": "Kerin O’Keefe",
    "title": "Masseria Setteporte 2012 Rosso  (Etna)",
    "variety": "Nerello Mascalese",
    "winery": "Masseria Setteporte"
  },
  {
    "country": "US",
    "designation": null,
    "points": 87,
    "price": "12",
    "province": "California",
    "tasterName": "Matt Kettmann",
    "title": "Mirassou 2012 Chardonnay (Central Coast)",
    "variety": "Chardonnay",
    "winery": "Mirassou"
  },
  {
    "country": "Germany",
    "designation": "Devon",
    "points": 87,
    "price": "24",
    "province": "Mosel",
    "tasterName": "Anna Lee C. Iijima",
    "title": "Richard Böcking 2013 Devon Riesling (Mosel)",
    "variety": "Riesling",
    "winery": "Richard Böcking"
  },
  {
    "country": "Argentina",
    "designation": "Felix",
    "points": 87,
    "price": "30",
    "province": "Other",
    "tasterName": "Michael Schachner",
    "title": "Felix Lavaque 2010 Felix Malbec (Cafayate)",
    "variety": "Malbec",
    "winery": "Felix Lavaque"
  },
  {
    "country": "Argentina",
    "designation": "Winemaker Selection",
    "points": 87,
    "price": "13",
    "province": "Mendoza Province",
    "tasterName": "Michael Schachner",
    "title": "Gaucho Andino 2011 Winemaker Selection Malbec (Mendoza)",
    "variety": "Malbec",
    "winery": "Gaucho Andino"
  },
  {
    "country": "Spain",
    "designation": "Vendimia Seleccionada Finca Valdelayegua Single Vineyard Crianza",
    "points": 87,
    "price": "28",
    "province": "Northern Spain",
    "tasterName": "Michael Schachner",
    "title": "Pradorey 2010 Vendimia Seleccionada Finca Valdelayegua Single Vineyard Crianza  (Ribera del Duero)",
    "variety": "Tempranillo Blend",
    "winery": "Pradorey"
  },
  {
    "country": "US",
    "designation": null,
    "points": 87,
    "price": "32",
    "province": "Virginia",
    "tasterName": "Alexander Peartree",
    "title": "Quiévremont 2012 Meritage (Virginia)",
    "variety": "Meritage",
    "winery": "Quiévremont"
  },
  {
    "country": "US",
    "designation": "Vin de Maison",
    "points": 87,
    "price": "23",
    "province": "Virginia",
    "tasterName": "Alexander Peartree",
    "title": "Quiévremont 2012 Vin de Maison Red (Virginia)",
    "variety": "Red Blend",
    "winery": "Quiévremont"
  },
  {
    "country": "US",
    "designation": null,
    "points": 87,
    "price": "20",
    "province": "Oregon",
    "tasterName": "Paul Gregutt",
    "title": "Acrobat 2013 Pinot Noir (Oregon)",
    "variety": "Pinot Noir",
    "winery": "Acrobat"
  },
  {
    "country": "Italy",
    "designation": "Ficiligno",
    "points": 87,
    "price": "19",
    "province": "Sicily & Sardinia",
    "tasterName": "Kerin O’Keefe",
    "title": "Baglio di Pianetto 2007 Ficiligno White (Sicilia)",
    "variety": "White Blend",
    "winery": "Baglio di Pianetto"
  },
  {
    "country": "US",
    "designation": "Signature Selection",
    "points": 87,
    "price": "22",
    "province": "California",
    "tasterName": "Matt Kettmann",
    "title": "Bianchi 2011 Signature Selection Merlot (Paso Robles)",
    "variety": "Merlot",
    "winery": "Bianchi"
  },
  {
    "country": "Italy",
    "designation": "Aynat",
    "points": 87,
    "price": "35",
    "province": "Sicily & Sardinia",
    "tasterName": "Kerin O’Keefe",
    "title": "Canicattì 2009 Aynat Nero d'Avola (Sicilia)",
    "variety": "Nero d'Avola",
    "winery": "Canicattì"
  },
]

export const get = () => async dispatch => {
  console.log('fetching...')
  // let results = await axios.get('https://lightninglaw.azurewebsites.net/api/reviews');
  // console.log('axios results:', results);
  // dispatch(getAllReviews(results.data));
  // dispatch(setCountries(results.data));

  dispatch(getAllReviews(dummyData));
  dispatch(setCountries(dummyData));
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

export const setCurrentCountry = (payload) => {
  return {
    type: 'SET_CURRENT',
    payload
  }
}

export const setPageNumber = (payload) => {
  return {
    type: 'SET_PAGE_NUMBER',
    payload
  }
}
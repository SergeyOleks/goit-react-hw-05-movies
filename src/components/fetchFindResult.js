import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '76d0875b39ab1860b25a4541346cfe9f';

async function feth(URL) {
  if (URL.trim() === '') {
    return;
  }
  try {
    return await axios.get(URL);
  } catch (err) {
    console.log(err);
  }
}

function fetchFindResult(path) {
  const URL = `${BASE_URL}${path}?api_key=${API_KEY}`;
  return feth(URL);
}

function getProductById(id) {
  const URL = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
  return feth(URL);
}

function getCasts(id) {
  const URL = `${BASE_URL}movie/${id}/casts?api_key=${API_KEY}`;
  return feth(URL);
}

function getReviews(id) {
  const URL = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`;
  return feth(URL);
}

function getFilms(name) {
  const URL = `${BASE_URL}search/movie?query=${name}&api_key=${API_KEY}`;
  return feth(URL);
}

export { fetchFindResult, getProductById, getCasts, getReviews, getFilms };

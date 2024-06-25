// js/constants.js
const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const MOVIE_DETAILS_API = 'https://api.themoviedb.org/3/movie/';

const form = document.getElementById('form');
const search = document.getElementById('search');

const hamburger = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown-menu');

export { API_KEY, API_URL, IMG_PATH, SEARCH_API, MOVIE_DETAILS_API, form, search, hamburger, dropdownMenu };

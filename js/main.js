// js/main.js
import { getMovies, setupEventListeners } from './events.js';
import { API_URL } from './constants.js';

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    getMovies(API_URL);
});

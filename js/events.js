// js/events.js
import { fetchMovies, fetchMovieDetails } from './api.js';
import { showMovies, showError, showMovieDetails } from './dom.js';
import { API_URL, SEARCH_API, form, search, hamburger, dropdownMenu } from './constants.js';


let currentSearchUrl = API_URL; // Store the current search URL

export function setupEventListeners() {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const searchTerm = search.value.trim();

        if (searchTerm) {
            currentSearchUrl = `${SEARCH_API}${searchTerm}`;
            try {
                const data = await fetchMovies(currentSearchUrl);
                if (data.results.length === 0) {
                    showError('This movie isn\'t available.');
                } else {
                    showMovies(data.results, showMovieDetailsHandler);
                }
            } catch (error) {
                showError(error.message);
            }
            search.value = '';
        } else {
            window.location.reload();
        }
    });

    setupHamburgerMenu();
}

async function showMovieDetailsHandler(movieId) {
    try {
        const movie = await fetchMovieDetails(movieId);
        showMovieDetails(movie, () => getMovies(currentSearchUrl));
    } catch (error) {
        showError(error.message);
    }
}

export async function getMovies(url) {
    try {
        const data = await fetchMovies(url);
        showMovies(data.results, showMovieDetailsHandler);
    } catch (error) {
        showError(error.message);
    }
}

function setupHamburgerMenu() {
    
    hamburger.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        if (!hamburger.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
}

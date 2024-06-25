// js/dom.js
import { IMG_PATH } from './constants.js';

const main = document.getElementById('main');

export function clearMain() {
    main.innerHTML = '';
}

export function showMovies(movies, onMovieClick) {
    clearMain();

    movies.forEach((movie) => {
        const { id, title, poster_path, release_date } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span>${release_date}</span>
            </div>
        `;

        movieEl.addEventListener('click', () => onMovieClick(id));

        main.appendChild(movieEl);
    });
}

export function showError(message) {
    clearMain();
    main.innerHTML = `<div class="error">${message}</div>`;
}

export function showMovieDetails(movie, onClose) {
    const movieDetailsEl = document.createElement('div');
    movieDetailsEl.classList.add('movie-details');

    const cast = movie.credits.cast.slice(0, 5).map(actor => actor.name).join(', ');

    movieDetailsEl.innerHTML = `
        <div class="movie-details-content">
            <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
            <div class="movie-details-info">
                <h2>${movie.title}</h2>
                <p><strong>Release Date:</strong> ${movie.release_date}</p>
                <p><strong>Rating:</strong> ${movie.vote_average}</p>
                <p><strong>Overview:</strong> ${movie.overview}</p>
                <p><strong>Cast:</strong> ${cast}</p>
                <button id="close-btn">Close</button>
            </div>
        </div>
    `;

    clearMain();
    main.appendChild(movieDetailsEl);

    document.getElementById('close-btn').addEventListener('click', onClose);
}

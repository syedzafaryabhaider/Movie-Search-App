// js/api.js
import { API_KEY, API_URL, SEARCH_API, MOVIE_DETAILS_API } from './constants.js';
import { getCachedData, setCachedData } from './cache.js';

export async function fetchMovies(url) {
    const cachedMovies = getCachedData(url);

    if (cachedMovies) {
        return cachedMovies;
    } else {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setCachedData(url, data); // Cache the response
            return data;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch movies. Please try again later.');
        }
    }
}

export async function fetchMovieDetails(movieId) {
    try {
        const res = await fetch(`${MOVIE_DETAILS_API}${movieId}?api_key=${API_KEY}&append_to_response=credits`);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return await res.json();
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch movie details. Please try again later.');
    }
}

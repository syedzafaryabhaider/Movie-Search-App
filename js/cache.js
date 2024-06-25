// js/cache.js
export function getCachedData(key) {
    const cachedData = localStorage.getItem(key);
    return cachedData ? JSON.parse(cachedData) : null;
}

export function setCachedData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

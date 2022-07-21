import axios from 'axios';

const KEY = '&&api_key=0f5c4a68ea4f6f8af4c4fd53fcc81027';
const URL = 'https://api.themoviedb.org/3/';
const TRENDING = 'trending/movie/day?';
const ID_FILM = id => `movie/${id}?&language=en-US`;
const ACTORS = id => `movie/${id}/credits?&language=en-US`;
const REVIEWS = id => `movie/${id}/reviews?&language=en-US&page=1`;
const SEARCHING =
  'search/movie?&language=en-US&page=1&include_adult=false&&query=';

const trendingFilms = URL + TRENDING + KEY;
const filmById = id => URL + ID_FILM(id) + KEY;
const filmActors = id => URL + ACTORS(id) + KEY;
const filmReviews = id => URL + REVIEWS(id) + KEY;
const searchingFilms = text => URL + SEARCHING + text + KEY;

export const fetchTrendingFilms = axios.get(trendingFilms);
export const fetchSearchingFilms = text => axios.get(searchingFilms(text));
export const fetchfilmById = id => axios.get(filmById(id));
export const fetchActors = id => axios.get(filmActors(id));
export const fetchreviews = id => axios.get(filmReviews(id));
export const image = id => `https://image.tmdb.org/t/p/w500/${id}`;

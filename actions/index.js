// actions/index.js
// Namespace actions
export const MOVIES_REQUEST = 'movieList/MOVIES_REQUEST'
export const MOVIES_SUCCESS = 'movieList/MOVIES_SUCCESS'
export const MOVIES_FAILURE = 'movieList/MOVIES_FAILURE'

import fetch from 'isomorphic-fetch';

export const loadMovies = (searchParam, dispatch) => {
	dispatch(requestMovies());
	fetch(`http://www.omdbapi.com/?s=${searchParam}&r=json`)
		.then(response => response.json())
		.then((response) => dispatch(processSuccessSearch(response)))
		.catch((err) => dispatch(processErrorSearch(err)));
}

export const requestMovies = () => {
	return {
		type: MOVIES_REQUEST
	}
}

export const processSuccessSearch = (response) => {
	console.log(response)
	return {
		type: MOVIES_SUCCESS,
		movies: response && response.Search || [],
	}
}

export const processErrorSearch = error => {
	return {
		type: MOVIES_FAILURE,
		error
	}
}
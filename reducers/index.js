import { MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_FAILURE } from '../actions';

const initialState = {
  movies: [],
  requestPending: false,
  error: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case MOVIES_REQUEST: 
      return Object.assign({}, state, {
        requestPending: true,
        error: false
      });

    case MOVIES_SUCCESS: {
      return Object.assign({}, state, {
        requestPending: false,
        error: false,
        movies: action.movies
      });
    }

    case MOVIES_FAILURE: {
      return Object.assign({}, state, {
        requestPending: false,
        error: action.error
      })
    }

    default:
      return state;
  }
}
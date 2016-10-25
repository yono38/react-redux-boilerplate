// components/CounterApp.jsx
import { connect } from 'react-redux';
import { loadMovies } from '../actions';
import MovieList from './MovieList';

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies || [],
    requestPending: state.requestPending || false
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDidMount: () => {
      loadMovies('Seven', dispatch);
    },

    onSearchChange: (searchVal) => {
      loadMovies(searchVal, dispatch);
    }
  }
};

const MovieListApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default MovieListApp;
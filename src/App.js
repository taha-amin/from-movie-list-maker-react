//track state for allMovies, filteredMovies, movieFormYearReleased, movieFormDirector, movieTitle, movieFormColor
//pass state as props correctly to MovieForm, Movie, and MovieList
//define a handleDeleteMovie function that deleted a movie from the state array using
//define a handleFilterMovies function that takes in a string and set filteredMovies to an array of movies whose name matches that string

import './App.css';
import { useState, useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setAllFilteredMovies] = useState([]);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('lightblue');
  const [filterQuery, setFilterQuery] = useState('');
  return <div className="App"></div>;
}

export default App;

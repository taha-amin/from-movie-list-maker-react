//track state for allMovies, filteredMovies, movieFormYearReleased, movieFormDirector, movieTitle, movieFormColor
//pass state as props correctly to MovieForm, Movie, and MovieList
//define a handleDeleteMovie function that deleted a movie from the state array using name
//define a handleFilterMovies function that takes in a string and set filteredMovies to an array of movies whose name matches that string

import './App.css';
import { useState, useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setAllFilteredMovies] = useState([]);
  const [movieFormName, setMovieFormName] = useState([]);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('lightblue');
  const [filterQuery, setFilterQuery] = useState('');

  useEffect(() => handleFilterMovies(filterQuery), [allMovies, filterQuery]); //eslint-disable-line

  function submitMovie(e) {
    e.preventDefault();

    const newMovie = {
      name: movieFormName,
      year: movieFormYearReleased,
      color: movieFormColor,
      director: movieFormDirector,
    };

    setAllMovies([...allMovies, newMovie]);

    setMovieFormName('');
    setMovieFormYearReleased('');
    setMovieFormDirector('');
    setMovieFormColor('lightblue');
  }

  function handleDeleteMovie(name) {
    const movieIndex = allMovies.findIndex((movie) => movie.name === name);

    allMovies.splice(movieIndex, 1);

    setAllMovies([...allMovies]);
  }

  function handleFilterMovies(search) {
    const searchMovies = allMovies.filter((movie) => movie.name.includes(search));

    search ? setAllFilteredMovies(searchMovies) : setAllFilteredMovies(allMovies);
  }
  return (
    <div className="App">
      <div className="current-movie quarter">
        <Movie
          movie={{
            name: movieFormName,
            year: movieFormYearReleased,
            color: movieFormColor,
            director: movieFormDirector,
          }}
        />
      </div>
      <div className="movie-filter quarter">
        Filter Movies
        <input onChange={(e) => setFilterQuery(e.target.value)} />
      </div>
      <MovieForm
        submitMovie={submitMovie}
        movieFormName={movieFormName}
        setMovieFormName={setMovieFormName}
        movieFormColor={movieFormColor}
        setMovieFormColor={setMovieFormColor}
        movieFormDirector={movieFormDirector}
        setMovieFormDirector={setMovieFormDirector}
        movieFormYearReleased={movieFormYearReleased}
        setMovieFormYearReleased={setMovieFormYearReleased}
      />
      <MovieList
        movies={filterQuery ? filteredMovies : allMovies}
        handleDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;

// takes in a movies prop and renders a list of Movie components
import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies, handleDeleteMovies }) {
  return (
    <div className="movie-list quarter">
      {movies.map((movie, i) => (
        <Movie key={movie.name + i} movie={movie} handleDeleteMovies={handleDeleteMovies} />
      ))}
    </div>
  );
}

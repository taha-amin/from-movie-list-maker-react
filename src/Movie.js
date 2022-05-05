//takes in a movie and renders it with the correct background color

import React from 'react';

export default function Movie({ movie, handleDeleteMovie }) {
  return (
    <div className="movie" onClick={() => handleDeleteMovie && handleDeleteMovie(movie.name)}>
      <h3>{movie.name}</h3>
      <p>{movie.year} Year</p>
    </div>
  );
}

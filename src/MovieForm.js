//On submit, add a movie to state
//On change for each input, call the appropriate state handler prop with correct e.target.value to update App.js state

import React from 'react';

export default function MovieForm({
  setMovieFormName,
  movieFormName,
  setMovieFormYearReleased,
  movieFormYearReleased,
  movieFormDirector,
  setMovieFormDirector,
  setMovieFormColor,
  movieFormColor,
  submitMovie,
}) {
  return (
    <div className="movie-form-container quarter">
      <form onSubmit={submitMovie} className="movie-form">
        <label>
          Movie Name
          <input
            required
            onChange={(e) => setMovieFormName(e.target.value)}
            value={movieFormName}
          />
        </label>

        <label>
          Year released
          <input
            required
            type="number"
            onChange={(e) => setMovieFormYearReleased(e.target.value)}
            value={movieFormYearReleased}
          />
        </label>

        <label>
          Director
          <input
            required
            onChange={(e) => setMovieFormDirector(e.target.value)}
            value={movieFormDirector}
          />
        </label>

        <label>
          Color
          <select
            required
            onChange={(e) => setMovieFormColor(e.target.value)}
            value={movieFormColor}
          >
            <option value="lightblue">Lightblue</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
          </select>
        </label>

        <button>Add Movie</button>
      </form>
    </div>
  );
}

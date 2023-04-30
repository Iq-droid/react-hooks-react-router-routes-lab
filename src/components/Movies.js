import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      {/* Movies
This component should render the text Movies Page in an <h1>, and make a new <div> for each movie. The <div> should contain the movie's title, time and a <ul> with a list of its genres, each within their own <li>. */}
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;

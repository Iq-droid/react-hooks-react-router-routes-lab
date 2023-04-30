import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      {/* Directors
This component should render the text Directors Page in an <h1>, and make a new <div> for each director. The <div> should contain the director's name and a <ul> with a list of their movies. */}
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <div key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;

import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      {/* Actors
This component should render the text Actors Page in an <h1>, and make a new <div> for each actor. The <div> should contain the actor's name and a <ul> with a list of their movies. */}
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <div key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;

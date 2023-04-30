import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      {/* App
Inside this component, we'll need to render our NavBar and four React Router Route components with the following paths:

/movies: should render the Movies component
/directors: should render the Directors component
/actors: should render the Actors component
/: should render the Home component */}

      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/actors" component={Actors} />
        <Route path="/directors" component={Directors} />
        <Route path="/movies" component={Movies} />
      </Switch>
    </div>
  );
}

export default App;

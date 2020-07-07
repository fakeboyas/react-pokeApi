import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Pages/Login/Login";
import PokemonList from "./Pages/PokemonList/PokemonList";
import PrivateRoute from "./helpers/ProvateRouting/PrivateRoute";
import PokemonDetails from './Pages/PokemonsDetail/PokemonsDetails'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path to="/">
            <Login />
          </Route>
          <PrivateRoute exact path="/pokemons">
            <PokemonList />
          </PrivateRoute>
          
          <PrivateRoute exact path="/pokemons/:name">
            <PokemonDetails />
          </PrivateRoute>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

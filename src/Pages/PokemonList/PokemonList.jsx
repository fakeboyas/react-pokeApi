import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:space-evenly;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20`;

    const response = await fetch(url);
    const result = await response.json();
    setPokemons(result);
  };

  useEffect(() => {
    fetchPokemon();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Pokemons</h1>
      <CardsList>
        {pokemons.results !== undefined &&
          pokemons.results.map((pokemon) => {
            const id = pokemon.url.split("/")[6];

            return (
              <Card key={id}>
                <Link to={`/pokemons/${pokemon.name}`}>
                  <Img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
                    alt="pokeimage"
                  />
                </Link>
                <h3>{pokemon.name}</h3>
              </Card>
            );
          })}
      </CardsList>
    </div>
  );
}

export default PokemonList;

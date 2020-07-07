import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
  width: 300px;
  height: 300px;
`;

const SmallImg =styled.img`
width:100px;
height:100px;`



function PokemonDetails() {
  let { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  const fetchSinglePokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    const response = await fetch(url);
    const result = await response.json();
    setPokemon(result);
  };

  useEffect(() => {
    fetchSinglePokemon();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {pokemon.sprites !== undefined && (
        <div>
          <h1>{pokemon.name}</h1>
          <Img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          <div>
          <SmallImg src={pokemon.sprites.front_default} alt={pokemon.name} />
          <SmallImg src={pokemon.sprites.back_default} alt={pokemon.name} />
          <SmallImg src={pokemon.sprites.back_shiny} alt={pokemon.name} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;

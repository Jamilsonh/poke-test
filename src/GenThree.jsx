import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import './App.css';
import { ContainerMain, ContainerPokemons } from './styles';

export const GenThree = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 200; i < 350; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };
  return (
    <>
      <ContainerMain>
        <ContainerPokemons>
          {pokemons.map((pokemon, key) => (
            <div key={key}>
              <PokeCard
                Name={pokemon.data.name}
                Image={pokemon.data.sprites.front_default}
              />
            </div>
          ))}
        </ContainerPokemons>
      </ContainerMain>
    </>
  );
};

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import './App.css';
import { ContainerMain, ContainerPokemons } from './styles';
import { Loading } from './Loading';

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getPokemons();
    }, 2000);
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 100; i++) {
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
          {pokemons.length === 0 ? (
            <Loading />
          ) : (
            pokemons.map((pokemon, key) => (
              <div key={key}>
                <PokeCard
                  Name={pokemon.data.name}
                  Image={pokemon.data.sprites.front_default}
                />
              </div>
            ))
          )}
        </ContainerPokemons>
      </ContainerMain>
    </>
  );
};

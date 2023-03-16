import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import animation from './Gifs/load.gif';

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerPokemons = styled.div`
  width: 1500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

// -------------- Header -------------- //

export const HeaderContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const Menu = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 1000px;
  height: 200px;
  font-size: 20px;
`;

export const MenuItem = styled(Link)`
  text-transform: uppercase;
  width: 150px;
  color: #000000;
  font-weight: 300;
  align-items: center;
  justify-content: center;
  padding: 3vw;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  opacity: ${(props) => (props.ativo ? 1 : 0.6)};
  letter-spacing: 5px;
  text-decoration: none;
`;

// -------------- PokeCard -------------- //

export const PokemonCard = styled.div`
  width: 180px;
  height: 120px;
  margin: 10px;
  background-color: #595c5c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
`;

export const PokemonNameContainer = styled.div`
  padding: 0 5px 0 5px;
  display: flex;
  justify-content: center;
  margin-bottom: -20px;
  z-index: 1;
  background-color: #ffffff4b;
  text-transform: uppercase;
  font-family: 'Kanit', sans-serif;
  border-radius: 25px;
`;

export const PokemonImage = styled.img`
  width: 100px;
  display: flex;
`;

// -------------- Loading -------------- //
export const GifImageMain = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GifImageContainer = styled.div`
  width: 80%;
  height: 100px;
  background-color: #1a1b1b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 15px;
  font-size: 20px;
`;

export const GifImage = styled.img`
  width: 90px;
  height: 64px;
  border-radius: 50%;
  margin: 25px;

  //animation-duration: 5s;
`;

/*
export const Animation = keyframes`
  0%{height: 64px;}
  25%{height: 125px;}
`;*/

import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import fundo from './Gifs/fundo.png';

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${fundo});
  background-size: contain;
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
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #252527;
  margin-bottom: 15px;

  @media (max-width: 1024px) {
    margin-bottom: 60px;
  }
`;

export const HeaderMenu = styled.div`
  width: 1350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 300px;
  }
`;

export const HeaderImgContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;

  @media (max-width: 1024px) {
    height: 90px;
    padding-top: 30px;
  }
`;

export const HeaderImg = styled.img`
  width: 173px;
  height: 62px;

  @media (max-width: 1024px) {
    width: 120px;
    height: 40px;
  }
`;

export const Menu = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 180px;
  font-size: 20px;
  border-radius: 25px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const MenuItem = styled(Link)`
  text-transform: uppercase;
  margin: 10px;
  width: 80px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5vw;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  opacity: ${(props) => (props.ativo ? 1 : 0.6)};
  text-decoration: none;
  background-color: #a8a8a8a2;
  border-radius: 25px;

  @media (max-width: 1024px) {
    padding: 0.75px;
    width: 80px;
  }
`;

// -------------- PokeCard -------------- //

export const PokemonCard = styled.div`
  width: 180px;
  height: 120px;
  margin: 10px;
  background-color: #242427;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
`;

export const PokemonNameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: -20px;
  z-index: 1;
`;

export const PokemonName = styled.div`
  padding: 0 5px 0 5px;
  background-color: #ececf173;
  text-transform: uppercase;
  font-family: 'Kanit', sans-serif;
  border-radius: 25px;
`;

export const PokemonId = styled.div`
  padding: 0 5px 0 5px;
  background-color: #ececf173;
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
  height: 1200px;
  display: flex;
  margin-top: 300px;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-top: 160px;
  }
`;

export const GifImageContainer = styled.div`
  width: 90%;
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
`;

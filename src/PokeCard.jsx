import {
  PokemonCard,
  PokemonId,
  PokemonImage,
  PokemonName,
  PokemonNameContainer,
} from './styles';

export default function PokeCard({ Name, Image, Id }) {
  return (
    <PokemonCard>
      <PokemonNameContainer>
        <PokemonId># {Id}</PokemonId>
        <PokemonName>{Name}</PokemonName>
      </PokemonNameContainer>
      <PokemonImage src={Image} />
    </PokemonCard>
  );
}

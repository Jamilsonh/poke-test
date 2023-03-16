import { PokemonCard, PokemonImage, PokemonNameContainer } from './styles';

export default function PokeCard({ Name, Image }) {
  return (
    <PokemonCard>
      <PokemonNameContainer>{Name}</PokemonNameContainer>
      <PokemonImage src={Image} />
    </PokemonCard>
  );
}

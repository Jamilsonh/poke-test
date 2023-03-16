import animation from './Gifs/pika.gif';
import { GifImage, GifImageContainer, GifImageMain } from './styles';

export const Loading = () => {
  return (
    <GifImageMain>
      <GifImageContainer>
        <GifImage src={animation} />
        Carregando dados...
      </GifImageContainer>
    </GifImageMain>
  );
};

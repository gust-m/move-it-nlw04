import { Container, Footer } from './styles';

interface InputLeaderboardProps {
  position: number;
  name: string;
  level: number;
  challengesCompleted: number;
  experience: number;
  image: string;
}

const InputLeaderboard: React.FC<InputLeaderboardProps> = ({
  level,
  challengesCompleted,
  experience,
  name,
  position,
  image,
}) => {
  return (
    <Container>
      <h1>{position}</h1>
      <img src={image} alt=" Gustavo Moraes" />
      <div>
        <h1>{name}</h1>
        <span>
          <img src="/icons/level-up.svg" alt="Level up" />
          <p>Level {level}</p>
        </span>
      </div>

      <Footer>
        <div>
          <span>
            <h2> {challengesCompleted}</h2>
            <p> completados</p>
          </span>

          <span>
            <h2>{experience}</h2>
            <p> xp</p>
          </span>
        </div>
      </Footer>
    </Container>
  );
};

export default InputLeaderboard;

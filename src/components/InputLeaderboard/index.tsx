import { Container, Footer } from './styles';

const InputLeaderboard: React.FC = () => {
  return (
    <Container>
      <h1>1</h1>
      <img src="https://github.com/gust-m.png" alt=" Gustavo Moraes" />
      <div>
        <h1>Gustavo Moraes</h1>
        <span>
          <img src="/icons/level-up.svg" alt="Level up" />
          <p>Level 25</p>
        </span>
      </div>

      <Footer>
        <div>
          <span>
            <h2> 121</h2>
            <p> completados</p>
          </span>

          <span>
            <h2>100000</h2>
            <p> xp</p>
          </span>
        </div>
      </Footer>
    </Container>
  );
};

export default InputLeaderboard;

import { Container, Description } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/gust-m.png" alt="Gustavo Moraes" />
      <Description>
        <strong>Gustavo Moraes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </Description>
    </Container>
  );
};

export default Profile;

import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { Container, Description } from './styles';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengeContext);
  return (
    <Container>
      <img
        src="https://pbs.twimg.com/profile_images/1293202325713100800/B9-b30wH_400x400.jpg"
        alt="Gustavo Moraes"
      />
      <Description>
        <strong>Gustavo Moraes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </Description>
    </Container>
  );
};

export default Profile;

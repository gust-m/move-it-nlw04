import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { Container, Description } from './styles';

const Profile: React.FC = () => {
  const { level, username } = useContext(ChallengeContext);
  return (
    <Container>
      <img src={`https://github.com/${username}.png`} alt="Gustavo Moraes" />
      <Description>
        <strong>{username}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </Description>
    </Container>
  );
};

export default Profile;

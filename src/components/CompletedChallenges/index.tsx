import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { Container } from './styles';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengeContext);
  return (
    <Container>
      <span>Completed Challenges</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
};

export default CompletedChallenges;

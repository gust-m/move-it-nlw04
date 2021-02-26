import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { Container, Overlay, Button } from './styles';

export const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);
  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Congratulations</strong>
        <p>you have reached a new level</p>

        <Button onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close Modal" />
        </Button>
      </Container>
    </Overlay>
  );
};

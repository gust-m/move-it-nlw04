import { useContext } from 'react';
import {
  Container,
  NotActiveChallengeContent,
  ActiveChallengeContent,
  Button,
} from './styles';

import { ChallengeContext } from '../../contexts/ChallengeContext';

export const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengeContext);

  return (
    <Container>
      {activeChallenge ? (
        <ActiveChallengeContent>
          <header>Get {activeChallenge.amount} xp</header>

          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt="Exercice logo"
            />
            <strong>New challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <Button status={false} type="button" onClick={resetChallenge}>
              false
            </Button>
            <Button status type="button">
              true
            </Button>
          </footer>
        </ActiveChallengeContent>
      ) : (
        <NotActiveChallengeContent>
          <strong>Finish the cycle to get a challenge</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Get levels by completing challenges
          </p>
        </NotActiveChallengeContent>
      )}
    </Container>
  );
};

export default ChallengeBox;

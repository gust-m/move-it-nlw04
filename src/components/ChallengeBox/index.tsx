import { useContext } from 'react';
import {
  Container,
  NotActiveChallengeContent,
  ActiveChallengeContent,
  Button,
} from './styles';

import { ChallengeContext } from '../../contexts/ChallengeContext';
import { CountdownContext } from '../../contexts/CountdownContext';

export const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengeContext,
  );

  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountdown();
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };
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
            <Button
              status={false}
              type="button"
              onClick={handleChallengeFailed}
            >
              false
            </Button>
            <Button status type="button" onClick={handleChallengeSucceeded}>
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

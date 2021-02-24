import { useState, useEffect, useContext } from 'react';
import { FaCheckCircle, FaRegStopCircle, FaPlay } from 'react-icons/fa';
import { Container, Counter, Button } from './styles';
import { ChallengeContext } from '../../contexts/ChallengeContext';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState('Start a cycle');
  const [hasFinished, setHasFinished] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  const { startNewChallenge } = useContext(ChallengeContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesLeft, minutesRight] = String(minutes)
    .padStart(2, '0')
    .split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  const handleStartCountdown = (): void => {
    // eslint-disable-next-line no-unused-expressions
    isActive ? setIsActive(false) : setIsActive(true);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      setButtonText('Leave Cycle');
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }

    if (!isActive) {
      clearTimeout(countdownTimeout);
      setTime(0.05 * 60);
      setButtonText('Start a cycle');
    }

    if (!isActive && hasFinished) {
      setButtonText('Finished cycle');
      setTime(0);
      startNewChallenge();
      setDisabledButton(true);
    }
  }, [isActive, time, hasFinished]);

  return (
    <>
      <Container>
        <Counter>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </Counter>
        <span>:</span>
        <Counter>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </Counter>
      </Container>
      <Button
        status={isActive}
        onClick={handleStartCountdown}
        hasFinished={hasFinished}
        disabled={disabledButton}
      >
        {buttonText}
        <p>
          {hasFinished && <FaCheckCircle size={20} />}
          {isActive && <FaRegStopCircle size={20} />}
          {!hasFinished && !isActive && <FaPlay size={20} />}
        </p>
      </Button>
    </>
  );
};

export default Countdown;

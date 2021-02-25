import { useContext } from 'react';
import { FaCheckCircle, FaRegStopCircle, FaPlay } from 'react-icons/fa';
import { Container, Counter, Button } from './styles';
import { CountdownContext } from '../../contexts/CountdownContext';

const Countdown: React.FC = () => {
  const {
    isActive,
    hasFinished,
    seconds,
    minutes,
    disabledButton,
    buttonText,
    handleStartCountdown,
  } = useContext(CountdownContext);

  const [minutesLeft, minutesRight] = String(minutes)
    .padStart(2, '0')
    .split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

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

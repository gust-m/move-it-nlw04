import { useContext, useEffect, useState } from 'react';
import { FaCheckCircle, FaRegStopCircle, FaPlay } from 'react-icons/fa';
import { Content, Counter, Button, Container, CurrentTime } from './styles';
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
    time,
    startingTime,
  } = useContext(CountdownContext);

  const [actualTime, setActualTime] = useState((100 * time) / time);

  const [minutesLeft, minutesRight] = String(minutes)
    .padStart(2, '0')
    .split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  useEffect(() => {
    setActualTime((100 * time) / (60 * 0.05));
  }, [time]);

  return (
    <Container>
      <Content>
        <Counter>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </Counter>
        <span>:</span>
        <Counter>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </Counter>
      </Content>
      <div>
        <Button
          status={isActive}
          onClick={handleStartCountdown}
          hasFinished={hasFinished}
          disabled={disabledButton}
        >
          <span>
            {buttonText}
            <p>
              {hasFinished && <FaCheckCircle size={20} />}
              {isActive && <FaRegStopCircle size={20} />}
              {!hasFinished && !isActive && <FaPlay size={20} />}
            </p>
          </span>
        </Button>
        <CurrentTime width={`${startingTime - actualTime}%`} />
      </div>
    </Container>
  );
};

export default Countdown;

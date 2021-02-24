import { useState, useEffect } from 'react';
import { Container, Counter, Button } from './styles';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);
  const [start, setStart] = useState('Start a cycle');

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
    active ? setActive(false) : setActive(true);
  };

  useEffect(() => {
    if (active && time > 0) {
      setStart('Pause');
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (!active && time !== 25 * 60) {
      setStart('Click to continue');
    }
  }, [active, time]);

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
      <Button onClick={handleStartCountdown}>{start}</Button>
    </>
  );
};

export default Countdown;

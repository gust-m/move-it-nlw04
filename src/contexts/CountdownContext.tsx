import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ChallengeContext } from './ChallengeContext';

interface CountdownContextData {
  isActive: boolean;
  hasFinished: boolean;
  seconds: number;
  minutes: number;
  disabledButton: boolean;
  buttonText: string;
  handleStartCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProps {
  children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export const CountdownProvider: React.FC = ({ children }: CountdownProps) => {
  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(60 * 0.05);
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState('Start a cycle');
  const [hasFinished, setHasFinished] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

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

    if (!isActive && !hasFinished) {
      clearTimeout(countdownTimeout);
      setTime(60 * 0.05);
      setButtonText('Start a cycle');
    }

    if (!isActive && hasFinished) {
      setButtonText('Finished cycle');
      startNewChallenge();
      setDisabledButton(true);
    }
  }, [hasFinished, isActive, time]);

  const resetCountdown = (): void => {
    clearTimeout(countdownTimeout);
    setTime(60 * 0.05);
    setHasFinished(false);
    setIsActive(false);
    setDisabledButton(false);
  };

  return (
    <CountdownContext.Provider
      value={{
        isActive,
        hasFinished,
        seconds,
        minutes,
        disabledButton,
        buttonText,
        handleStartCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};

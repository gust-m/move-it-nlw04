/* eslint-disable no-param-reassign */
import { createContext, ReactNode, useEffect, useState } from 'react';

import challenges from '../../challenges.json';

interface ExerciseProps {
  type: string;
  description: string;
  amount: number;
}

interface ChallengeProviderData {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
  activeChallenge: ExerciseProps;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesProvidersProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengeProviderData);

export const ChallengesProvider: React.FC = ({
  children,
}: ChallengesProvidersProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState<ExerciseProps>(null);

  const experienceToNextLevel = ((level + 1) * 4) ** 2;

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      // eslint-disable-next-line no-new
      new Notification('New Challenge', {
        body: `Earn ${challenge.amount}xp reward completing this challenge`,
      });
    }
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const checkUserExperience = (
    totalExperience: number,
    actualLevel: number,
  ) => {
    const expToNextLevel = ((actualLevel + 1) * 4) ** 2;
    if (totalExperience > expToNextLevel) {
      totalExperience -= expToNextLevel;
      actualLevel += 1;
      return checkUserExperience(totalExperience, actualLevel);
    }

    setLevel(actualLevel);
    return totalExperience;
  };

  const completeChallenge = () => {
    if (!activeChallenge) {
      return;
    }
    const { amount } = activeChallenge;

    const totalExperience = amount + currentExperience;
    const actualLevel = level;

    const finalExperience = checkUserExperience(totalExperience, actualLevel);
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  };

  return (
    <ChallengeContext.Provider
      value={{
        level,
        challengesCompleted,
        currentExperience,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

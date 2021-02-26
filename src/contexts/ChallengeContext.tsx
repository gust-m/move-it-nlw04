/* eslint-disable no-param-reassign */
import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';

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
  closeLevelUpModal: () => void;
}

interface ChallengesProvidersProps {
  children: ReactNode;
  level: number;
  challengesCompleted: number;
  currentExperience: number;
}

export const ChallengeContext = createContext({} as ChallengeProviderData);

export const ChallengesProvider: React.FC<ChallengesProvidersProps> = ({
  children,
  ...rest
}: ChallengesProvidersProps) => {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0,
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0,
  );

  const [activeChallenge, setActiveChallenge] = useState<ExerciseProps>(null);

  const experienceToNextLevel = ((level + 1) * 4) ** 2;

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [challengesCompleted, currentExperience, level]);

  const levelUp = () => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
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
  ): number => {
    const expToNextLevel = ((actualLevel + 1) * 4) ** 2;
    if (totalExperience > expToNextLevel) {
      totalExperience -= expToNextLevel;
      actualLevel += 1;
      return checkUserExperience(totalExperience, actualLevel);
    }

    setIsLevelUpModalOpen(true);
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

    if (totalExperience > experienceToNextLevel) {
      const finalExperience = checkUserExperience(totalExperience, actualLevel);
      setCurrentExperience(finalExperience);
    } else {
      setCurrentExperience(totalExperience);
    }

    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  };

  const closeLevelUpModal = () => {
    setIsLevelUpModalOpen(false);
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
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  );
};

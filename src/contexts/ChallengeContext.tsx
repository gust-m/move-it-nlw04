/* eslint-disable no-restricted-globals */
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
  totalExperience: number;
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
  totalExperience: number;
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
  const [totalExperience, setTotalExperience] = useState(
    rest.totalExperience ?? 0,
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
    Cookies.set('totalExperience', String(totalExperience));
  }, [challengesCompleted, currentExperience, level, totalExperience]);

  const levelUp = () => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  };

  const startNewChallenge = async () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      if (screen.width <= 580) {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js').then(
            registration => {
              console.log(
                'Service worker registration succeeded:',
                registration,
              );
            },
            error => {
              console.log('Service worker registration failed:', error);
            },
          );
        } else {
          console.log('Service workers are not supported.');
        }
      } else {
        const notification = new Notification('New Challenge', {
          body: `Earn ${challenge.amount}xp reward completing this challenge`,
        });
      }
    }
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const checkUserExperience = (
    totalExperienceEarned: number,
    actualLevel: number,
  ): number => {
    const expToNextLevel = ((actualLevel + 1) * 4) ** 2;
    if (totalExperienceEarned > expToNextLevel) {
      totalExperienceEarned -= expToNextLevel;
      actualLevel += 1;
      return checkUserExperience(totalExperienceEarned, actualLevel);
    }

    setIsLevelUpModalOpen(true);
    setLevel(actualLevel);
    return totalExperienceEarned;
  };

  const completeChallenge = () => {
    if (!activeChallenge) {
      return;
    }
    const { amount } = activeChallenge;

    const totalExperienceEarned = amount + currentExperience;

    if (totalExperienceEarned > experienceToNextLevel) {
      const actualLevel = level;

      const finalExperience = checkUserExperience(
        totalExperienceEarned,
        actualLevel,
      );
      setCurrentExperience(finalExperience);
    } else {
      setCurrentExperience(totalExperienceEarned);
    }

    setTotalExperience(totalExperience + amount);
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
        totalExperience,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  );
};

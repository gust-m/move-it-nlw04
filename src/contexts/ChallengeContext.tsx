/* eslint-disable react/require-default-props */
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
  username: string;
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
  logoutUser: () => void;
  handleSelectUsername: (inputValue: string) => void;
}

interface ChallengesProvidersProps {
  children: ReactNode;
  level: number;
  username: string;
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

  const [isLogged, setIsLogged] = useState(false);

  const [username, setUsername] = useState(rest.username ?? '');

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
    Cookies.set('totalExperience', String(totalExperience));
    setIsLogged(true);
  }, [challengesCompleted, currentExperience, level, totalExperience]);

  const levelUp = () => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  };

  const handleSelectUsername = (inputValue: string): void => {
    setUsername(inputValue);
  };

  const user = Cookies.get('username');

  useEffect(() => {
    user ? handleSelectUsername(user) : handleSelectUsername('teste');
  }, [user]);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    Notification.requestPermission(result => {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification('MoveIt 😎', {
            body: `Novo desafio Valendo ${challenge.amount} xp!`,
            icon: 'favicon.png',
            vibrate: [300, 100, 400],
            tag: 'notification-sample',
          });
        });
      }
    });
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

  const logoutUser = () => {
    Cookies.remove('level');
    Cookies.remove('currentExperience');
    Cookies.remove('challengesCompleted');
    Cookies.remove('totalExperience');
    Cookies.remove('username');

    setIsLogged(false);
  };

  return (
    <ChallengeContext.Provider
      value={{
        level,
        username,
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
        logoutUser,
        handleSelectUsername,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  );
};

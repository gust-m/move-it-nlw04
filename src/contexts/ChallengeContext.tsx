import { createContext, ReactNode, useState } from 'react';

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
  levelUp(): void;
  startNewChallenge(): void;
  resetChallenge(): void;
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

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = ((level + 1) * 4) ** 2;

  const levelUp = () => {
    setLevel(level + 1);
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
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
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

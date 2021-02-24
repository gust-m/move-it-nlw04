import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { Header, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengeContext,
  );

  const percentExperience = String(
    Math.floor((10 * 100) / experienceToNextLevel),
  );
  return (
    <Header>
      <span>0 xp</span>
      <div>
        <CurrentExperience width={`${percentExperience}%`}>
          <span>{currentExperience} xp</span>
        </CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Header>
  );
};

export default ExperienceBar;

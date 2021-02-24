import { Header, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => (
  <Header>
    <span>0 xp</span>
    <div>
      <CurrentExperience width="50%" />
      <span>300 xp</span>
    </div>
    <span>600 xp</span>
  </Header>
);

export default ExperienceBar;

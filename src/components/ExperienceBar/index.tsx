import { Header, Container, CurrentXP } from './styles';

export const ExperienceBar: React.FC = () => (
  <Container>
    <Header>
      <span>0 xp</span>
      <div>
        <CurrentXP width="50%" />
        <span>300 xp</span>
      </div>
      <span>600 xp</span>
    </Header>
  </Container>
);

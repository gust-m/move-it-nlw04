import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { Container, Overlay, Button, Aside, Content } from './styles';

export const LevelUpModal: React.FC = () => {
  const {
    level,
    closeLevelUpModal,
    challengesCompleted,
    totalExperience,
  } = useContext(ChallengeContext);

  const lessThenTen = '/icons/levelup.svg';
  const moreThenTen = '/icons/union2.svg';

  return (
    <Overlay>
      <Container>
        <Content image={level > 9 ? moreThenTen : lessThenTen}>
          <header>{level}</header>

          <strong>Congratulations</strong>
          <p>you have reached a new level</p>
        </Content>
        <Aside>
          <span>
            <h1>Challenges</h1>
            <div>
              <h2>{challengesCompleted}</h2>
              <p>completed</p>
            </div>
          </span>
          <span>
            <h1>Experience</h1>
            <div>
              <h2>{totalExperience}</h2>
              <p>xp</p>
            </div>
          </span>
          <img src="/logo-full.svg" alt="" />
        </Aside>

        <Button onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close Modal" />
        </Button>
      </Container>
    </Overlay>
  );
};

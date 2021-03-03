import { Container, Content, Header } from '../../styles/leaderboard/styles';

import Sidebar from '../../components/Sidebar/index';
import InputLeaderboard from '../../components/InputLeaderboard/index';
import { SidebarProvider } from '../../contexts/SidebarContext';

const Leaderboard: React.FC = () => {
  return (
    <Container>
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>

      <Content>
        <h1>Leaderboard</h1>
        <Header>
          <span>
            <p>POSITION</p>
            <p>USER</p>
          </span>
          <span>
            <p>CHALLENGES</p>
            <p>EXPERIENCE</p>
          </span>
        </Header>

        <InputLeaderboard
          name="Gustavo Moraes"
          challengesCompleted={120}
          experience={199999}
          level={43}
          position={1}
          image="https://pbs.twimg.com/profile_images/1293202325713100800/B9-b30wH_400x400.jpg"
        />
        <InputLeaderboard
          name="Jhon Doe"
          challengesCompleted={100}
          experience={184512}
          level={39}
          position={2}
          image="http://pm1.narvii.com/6298/d6a53da69940265e6cb6ecc0b49d84a2d41efe80_00.jpg"
        />
        <InputLeaderboard
          name="Fulano detal"
          challengesCompleted={98}
          experience={183014}
          level={38}
          position={3}
          image="https://cdn140.picsart.com/328743678006211.png?type=webp&to=min&r=640"
        />
      </Content>
    </Container>
  );
};

export default Leaderboard;

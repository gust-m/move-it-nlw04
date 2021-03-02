/* eslint-disable react/prop-types */
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

        <InputLeaderboard />
        <InputLeaderboard />
        <InputLeaderboard />
      </Content>
    </Container>
  );
};

export default Leaderboard;

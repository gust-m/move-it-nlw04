import { useContext } from 'react';

import { FiHome, FiAward, FiArrowLeft } from 'react-icons/fi';

import Link from 'next/link';

import { Container, Navigation, Button, Logout } from './styles';
import { SidebarContext } from '../../contexts/SidebarContext';
import { ChallengeContext } from '../../contexts/ChallengeContext';

const Sidebar: React.FC = () => {
  const {
    isHomeSelected,
    isAwardSelected,
    handleChangeToHomeIconSelected,
    handleChangeToAwardIconSelected,
  } = useContext(SidebarContext);

  const { logoutUser } = useContext(ChallengeContext);

  return (
    <Container>
      <img src="/icons/logo-moveit-sidebar.svg" alt="Moveit Logo" />

      <Navigation>
        <Link href="/home">
          <Button
            type="button"
            onClick={handleChangeToHomeIconSelected}
            isSelected={isHomeSelected}
          >
            <p />
            <FiHome />
          </Button>
        </Link>
        <Link href="/leaderboard">
          <Button
            type="button"
            onClick={handleChangeToAwardIconSelected}
            isSelected={isAwardSelected}
          >
            <p />
            <FiAward />
          </Button>
        </Link>
      </Navigation>

      <Link href="/">
        <Logout onClick={logoutUser}>
          <FiArrowLeft size={20} />
          <button type="button">Logout</button>
        </Logout>
      </Link>
    </Container>
  );
};

export default Sidebar;

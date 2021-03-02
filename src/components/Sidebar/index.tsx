import { useContext } from 'react';

import { FiHome, FiAward } from 'react-icons/fi';

import Link from 'next/link';

import { Container, Navigation, Button } from './styles';
import { SidebarContext } from '../../contexts/SidebarContext';

const Sidebar: React.FC = () => {
  const {
    isHomeSelected,
    isAwardSelected,
    handleChangeToHomeIconSelected,
    handleChangeToAwardIconSelected,
  } = useContext(SidebarContext);

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
    </Container>
  );
};

export default Sidebar;

import { useState } from 'react';

import { FiHome, FiAward } from 'react-icons/fi';

import Link from 'next/link';

import { Container, Navigation, Button } from './styles';

const Sidebar: React.FC = () => {
  const [isHomeSelected, setIsHomeSelected] = useState(true);
  const [isAwardSelected, setIsAwardSelected] = useState(false);

  const handleChangeToHomeIconSelected = (): void => {
    setIsHomeSelected(true);
    setIsAwardSelected(false);
  };

  const handleChangeToAwardIconSelected = (): void => {
    setIsHomeSelected(false);
    setIsAwardSelected(true);
  };

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

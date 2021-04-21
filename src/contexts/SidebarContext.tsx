import { createContext, ReactNode, useEffect, useState } from 'react';

interface SidebarProps {
  children: ReactNode;
}

interface SidebarProviderData {
  isHomeSelected: boolean;
  isAwardSelected: boolean;
  handleChangeToHomeIconSelected: () => void;
  handleChangeToAwardIconSelected: () => void;
}

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarContext = createContext({} as SidebarProviderData);

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}: SidebarProps) => {
  const [isHomeSelected, setIsHomeSelected] = useState(true);
  const [isAwardSelected, setIsAwardSelected] = useState(false);
  const [activeButton, setActiveButton] = useState(true);

  const handleChangeToHomeIconSelected = (): void => {
    setActiveButton(true);
  };

  const handleChangeToAwardIconSelected = (): void => {
    setActiveButton(false);
  };

  useEffect(() => {
    window.location.pathname === '/leaderboard' && setActiveButton(false);
    if (activeButton) {
      setIsHomeSelected(true);
      setIsAwardSelected(false);
    }
    if (!activeButton) {
      setIsAwardSelected(true);
      setIsHomeSelected(false);
    }
  }, [activeButton]);

  return (
    <SidebarContext.Provider
      value={{
        handleChangeToAwardIconSelected,
        handleChangeToHomeIconSelected,
        isAwardSelected,
        isHomeSelected,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

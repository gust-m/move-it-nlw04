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
    if (activeButton) {
      setIsAwardSelected(false);
      setIsHomeSelected(true);
    }
    if (!activeButton) {
      setIsAwardSelected(true);
      setIsHomeSelected(false);
    }
  }, [activeButton, isAwardSelected, isHomeSelected]);

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

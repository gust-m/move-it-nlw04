import { ReactNode, useCallback, useState, createContext } from 'react';

interface InputContextData {
  isFocused: boolean;
  handleInputFocus: () => void;
  handleInputBlur: () => void;
  handleSelectUsername: (inputValue: string) => void;
}

interface InputProps {
  children: ReactNode;
}

export const InputContext = createContext({} as InputContextData);

export const InputProvider: React.FC<InputProps> = ({
  children,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [username, setUsername] = useState('');

  const handleInputFocus = useCallback((): void => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback((): void => {
    setIsFocused(false);
  }, []);

  const handleSelectUsername = (inputValue: string): void => {
    setUsername(inputValue);
  };
  return (
    <InputContext.Provider
      value={{
        isFocused,
        handleInputFocus,
        handleInputBlur,
        handleSelectUsername,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

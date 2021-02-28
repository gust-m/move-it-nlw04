import {
  ReactNode,
  useCallback,
  useState,
  createContext,
  useRef,
  MutableRefObject,
} from 'react';

interface InputContextData {
  isFocused: boolean;
  inputRef: MutableRefObject<any>;
  handleInputFocus: () => void;
  handleInputBlur: () => void;
}

interface InputProps {
  children: ReactNode;
}

export const InputContext = createContext({} as InputContextData);

export const InputProvider: React.FC = ({ children }: InputProps) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback((): void => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback((): void => {
    setIsFocused(false);
  }, []);

  return (
    <InputContext.Provider
      value={{
        isFocused,
        handleInputFocus,
        handleInputBlur,
        inputRef,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

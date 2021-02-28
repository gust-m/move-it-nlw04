import { InputHTMLAttributes, useContext } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { InputContext } from '../../contexts/InputContext';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

// eslint-disable-next-line react/prop-types
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const { handleInputBlur, handleInputFocus, isFocused } = useContext(
    InputContext,
  );
  return (
    <Container isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input onFocus={handleInputFocus} onBlur={handleInputBlur} {...rest} />
    </Container>
  );
};

export default Input;

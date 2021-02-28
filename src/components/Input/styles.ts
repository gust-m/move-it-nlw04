import styled, { css } from 'styled-components';

interface ContaienrProps {
  isFocused: boolean;
}

export const Container = styled.div<ContaienrProps>`
  background: var(--blue);
  border-radius: 5px 0px 0px 5px;
  padding: 0px 0px 0px 15px;
  width: 100%;
  border: 2px solid var(--blue);

  background: rgb(73, 83, 184);
  background: linear-gradient(
    90deg,
    rgba(73, 83, 184, 1) 0%,
    rgba(89, 101, 224, 1) 100%
  );

  > svg {
    margin-right: 10px;
  }

  input {
    outline: none;
    color: var(--white);
    flex: 1;
    height: 80px;
    width: 340px;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #b2b9ff;
    }

    ${props =>
      props.isFocused &&
      css`
        color: var(--gray-line);
      `}
  }

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #232129;
    `}
`;

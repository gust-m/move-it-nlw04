import styled, { css } from 'styled-components';

interface ContaienrProps {
  isFocused: boolean;
}

export const Container = styled.div<ContaienrProps>`
  background: var(--blue);
  border-radius: 5px 0px 0px 5px;
  padding: 0px 0px 0px 15px;
  width: 100%;

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
        &::placeholder {
          opacity: 0;
        }
        color: var(--gray-line);
      `}
    @media (max-width: 490px) {
      width: 220px;
      height: 57px;
    }
  }

  ${props =>
    props.isFocused &&
    css`
      box-shadow: inset 0 0 6px #232129;
    `};

  &:hover {
    box-shadow: inset 0 0 6px #232129;
  }
`;

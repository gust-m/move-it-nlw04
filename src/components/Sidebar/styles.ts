import styled, { css } from 'styled-components';

interface ButtonProps {
  isSelected: boolean;
}

export const Container = styled.div`
  background: var(--white);
  width: 7rem;
  display: flex;
  min-width: 105px;

  > img {
    position: absolute;
    padding: 2rem;
  }

  @media (max-width: 520px) {
    height: 200vh;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  }

  button + button {
    margin-top: 1.75rem;
  }
`;

export const Button = styled.button<ButtonProps>`
  border: 0;
  background: transparent;
  display: flex;
  width: 100%;
  align-items: center;

  p {
    width: 0.25rem;
    height: 3.5rem;
    background: var(--blue);
    border-radius: 0 5px 5px 0;
    left: 0;
  }

  ${props =>
    props.isSelected
      ? css`
          p {
            width: 4px;
            height: 56px;
            background: var(--blue);
            border-radius: 0 5px 5px 0;
            left: 0;
            margin-right: 2rem;
          }

          svg {
            color: var(--blue);
            opacity: 1;
          }
        `
      : css`
          p {
            width: 4px;
            height: 56px;
            background: var(--white);
            border-radius: 0 5px 5px 0;
            left: 0;
            margin-right: 2rem;

            color: var(--text);
          }

          svg {
            opacity: 0.5;
          }
        `}
  &:focus {
    outline: none;
  }
`;

export const Logout = styled.div`
  display: flex;
  align-items: center;

  position: absolute;

  bottom: 4.5rem;
  left: 0.75rem;

  background: var(--red);

  padding: 5px;

  border-radius: 5px;

  cursor: pointer;

  transition: background-color 0.3s;

  svg {
    color: var(--white);
    margin-right: 4px;
  }

  button {
    height: 30px;

    border: 0;
    outline: none;

    background: transparent;

    color: var(--white);
  }

  &:hover {
    background: #c91230;
  }
`;

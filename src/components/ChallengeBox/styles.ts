import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  status: boolean;
}

export const Container = styled.div`
  height: 100%;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.06);
  padding: 1.5rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 650px) {
    margin-bottom: 5rem;
  }
`;

export const NotActiveChallengeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
    }
  }

  @media (max-height: 666px) {
    max-height: 70%;
  }
`;

export const ActiveChallengeContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }

    @media (max-width: 650px) {
      margin-top: 1rem;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 650px) {
      justify-items: center;
      align-items: center;
      margin-top: 2rem;
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  height: 3rem;
  width: 11rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  color: var(--white);

  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s;

  ${props =>
    props.status
      ? css`
          background: var(--green);
          &:hover {
            background: ${shade(0.2, '#4cd62b')};
          }
        `
      : css`
          background: var(--red);
          &:hover {
            background: ${shade(0.2, '#e83f5b')};
          }
        `}

  @media (max-width: 840px) {
    width: 9rem;
  }
`;

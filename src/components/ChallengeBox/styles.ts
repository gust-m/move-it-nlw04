import styled, { css } from 'styled-components';

interface ButtonProps {
  status: boolean;
}

export const Container = styled.div`
  height: 100%;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.06);
  padding-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const NotActiveChallengeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    width: 23rem;
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
  @media (max-width: 650px) {
    padding-bottom: 15px;
  }
`;

export const ActiveChallengeContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
    max-width: 80%;
    align-items: center;
    justify-content: center;
    margin-left: 10%;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;

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

    @media (max-width: 650px) {
      margin-top: 2rem;
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;

  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s;
  border-top: 1.5px solid var(--gray-line);

  &:first-child {
    border-radius: 0 0 0 5px;
    border-right: 0.5px solid var(--gray-line);
  }

  &:last-child {
    border-radius: 0 0 5px 0;
    border-left: 0.5px solid var(--gray-line);
  }

  ${props =>
    props.status
      ? css`
          background: #f7fff5;
          color: #3fb023;
          &:hover {
            color: var(--white);
            background: var(--green);
          }
        `
      : css`
          background: #fff5f5;
          color: #e83f5b;
          &:hover {
            color: var(--white);
            background: #e83f5b;
          }
        `}
`;

import styled, { css } from 'styled-components';

interface ButtonProps {
  filled: boolean;
}

export const Container = styled.div`
  background: var(--blue);
  height: 100vh;

  display: flex;

  > img {
    max-width: 50%;
  }

  @media (max-width: 1100px) {
    > img {
      max-width: 40%;
    }
  }

  @media (max-width: 905px) {
    > img {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 5rem;

  place-content: center;

  width: 100%;
  max-width: 700px;

  color: var(--white);

  > img {
    margin: 96px 0;
    width: 360px;

    @media (max-width: 490px) {
      width: 260px;
    }
  }

  h1 {
    font-size: 36px;
    margin-bottom: 24px;

    @media (max-width: 490px) {
      font-size: 26px;
    }
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b2b9ff;

    margin-bottom: 40px;

    img {
      height: 40px;
      margin-right: 24px;

      @media (max-width: 490px) {
        height: 36px;
      }
    }

    span {
      width: 254px;

      font-size: 20px;
      line-height: 30px;
      @media (max-width: 490px) {
        width: 183px;

        font-size: 14px;
        line-height: 22px;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 905px) {
    align-items: center;

    h1 {
      font-size: 40px;
      margin-bottom: 30px;
    }

    input {
      max-width: 280px;
    }
  }
  @media (max-width: 490px) {
    margin-left: 0;
  }
`;

export const Button = styled.button<ButtonProps>`
  height: 80px;
  width: 80px;
  padding: 0 24px;
  border-radius: 0 10px 10px 0;

  color: var(--white);

  background: var(--blue-dark);
  border: 0;

  transition: background-color 1s;

  ${props =>
    props.filled &&
    css`
      background: var(--green);
    `}

  @media (max-width: 490px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
    }

    width: 40px;
    height: 57px;
  }

  &:focus {
    outline: none;
  }
`;

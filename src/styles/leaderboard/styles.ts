import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  margin: 2.5rem 11.5rem 0 11.5rem;
  @media (max-width: 1000px) {
    margin: 1rem 0 0 3.5rem;
  }

  h1 {
    color: var(--title);
    font-size: 36px;
    line-height: 46px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;

  margin-top: 2.5rem;

  span {
    opacity: 0.5;
  }

  span:first-child {
    display: flex;
    p {
      color: var(--text);
      font-size: 14px;
      font-weight: bold;
    }

    p + p {
      margin-left: 2rem;
      margin-right: 27.5rem;

      @media (max-width: 1420px) {
        margin-right: 23.5rem;
      }
      @media (max-width: 1366px) {
        margin-right: 22.5rem;
      }
      @media (max-width: 1300px) {
        margin-right: 18.5rem;
      }
      @media (max-width: 1260px) {
        margin-right: 14.5rem;
      }
      @media (max-width: 1000px) {
        margin-right: 20.5rem;
      }
      @media (max-width: 950px) {
        margin-right: 16rem;
      }
    }
  }

  > span:last-child {
    display: flex;

    p {
      color: var(--text);
      font-size: 14px;
      font-weight: bold;
    }

    p + p {
      margin-left: 6rem;
    }
  }

  margin-bottom: 24px;
`;

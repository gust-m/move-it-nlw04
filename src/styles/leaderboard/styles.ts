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
  margin: 0 11.5rem;
  margin-top: 2.5rem;

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
      margin-left: 5rem;
    }
  }

  margin-bottom: 24px;
`;

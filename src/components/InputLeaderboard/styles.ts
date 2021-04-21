import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: var(--white);
  width: 100%;
  max-width: 960px;

  border-radius: 10px;

  margin-bottom: 10px;
  transition: transform 0.3s;

  > h1 {
    padding: 30px;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    border-right: 4px solid var(--gray-line);
    min-width: 80px;
  }

  > img {
    min-width: 64px;
    max-height: 64px;

    border-radius: 50%;

    margin: 16px 24px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 20px;
      line-height: 24px;
    }

    span {
      display: flex;
      img {
        width: 14px;
        height: 16px;
        margin-right: 9px;
      }

      p {
        font-size: 16px;
        line-height: 19px;
        min-width: 80px;
      }
    }
  }

  &:hover {
    transform: translateX(10px);
  }
`;

export const Footer = styled.div`
  flex: 1;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 58px;
    min-width: 390px;

    span {
      h2 {
        color: var(--blue);
        font-weight: 500;
        margin-right: 4px;
        font-size: 16px;
        line-height: 19px;
      }

      p {
        font-weight: 500;
      }
    }

    span + span {
      margin-left: 58px;
    }
  }
`;

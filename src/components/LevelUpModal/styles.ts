import styled, { css } from 'styled-components';

interface ContentProps {
  image: string;
}

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: var(--white);
  width: 100%;
  max-width: 900px;
  padding: 2rem 1.5rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.06);
  text-align: center;

  position: relative;
  display: flex;
`;

export const Button = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;
  font-size: 0px;
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 50px;
  span {
    h1 {
      display: flex;
      font-size: 24px;
      color: var(--text);
      opacity: 0.5;
    }

    div {
      display: flex;
      align-items: center;

      h2 {
        color: var(--blue);
        font-size: 40px;
        margin-right: 9px;
      }

      p {
        color: var(--text);
        font-size: 40px;
      }
      margin-top: 8px;

      max-width: 340px;
      margin-bottom: 20px;
    }
    border-bottom: 1.5px solid #dcdde0;
  }

  span + span {
    margin-top: 24px;
  }

  img {
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
  }
`;

export const Content = styled.div<ContentProps>`
  header {
    font-size: 15rem;
    font-weight: 600;
    color: var(--blue);
    background-size: contain;
    padding: 0 115px;
    ${props =>
      props.image === '/icons/levelup.svg'
        ? css`
            background: url('${props.image}') no-repeat center;
            background-size: 800px;
            background-position: initial;
            background-position-y: 40px;
            background-position-x: 20px;
          `
        : css`
            min-width: 530px;
            background: url('${props.image}') no-repeat center;
          `};
  }

  strong {
    font-size: 2.25rem;
    color: var(--title);
  }

  p {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
  }
`;

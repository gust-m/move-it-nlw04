/* eslint-disable no-restricted-globals */
import { ReactNode, useEffect } from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

const MyApp: ReactNode = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;

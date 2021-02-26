import { ReactNode } from 'react';
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

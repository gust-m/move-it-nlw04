/* eslint-disable no-restricted-globals */
import { ReactNode, useEffect } from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

const MyApp: ReactNode = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          registration => {
            console.log(
              'Service Worker registration successful with scope: ',
              registration.scope,
            );
          },
          err => {
            console.log('Service Worker registration failed: ', err);
          },
        );
      });
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;

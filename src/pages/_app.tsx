/* eslint-disable no-restricted-globals */
import { ReactNode, useEffect } from 'react';
import firebase from 'firebase';
import { AppProps } from 'next/app';
import { firebaseCloudMessaging } from '../../webPush.js';
import GlobalStyle from '../styles/global';

declare const self: any;

const MyApp: ReactNode = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;

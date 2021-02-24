import { ReactNode } from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

import { ChallengesProvider } from '../contexts/ChallengeContext';

const MyApp: ReactNode = ({ Component, pageProps }: AppProps) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ChallengesProvider>
  );
};

export default MyApp;

import React from 'react';

import Head from 'next/head';
import { Container } from '../styles/pages/styles';

import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div />
      </section>
    </Container>
  );
};

export default Home;

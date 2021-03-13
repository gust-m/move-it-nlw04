import React from 'react';

import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { Container, FlexContent } from '../../styles/home/styles';

import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import CompletedChallenges from '../../components/CompletedChallenges';
import Countdown from '../../components/Countdown';
import ChallengeBox from '../../components/ChallengeBox';
import Sidebar from '../../components/Sidebar';

import { CountdownProvider } from '../../contexts/CountdownContext';
import { ChallengesProvider } from '../../contexts/ChallengeContext';
import { SidebarProvider } from '../../contexts/SidebarContext';

interface CtxProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  totalExperience: number;
}

const Home: React.FC<CtxProps> = ({
  level,
  currentExperience,
  challengesCompleted,
  totalExperience,
}: CtxProps) => {
  // const check = () => {
  //   if (!('serviceWorker' in navigator)) {
  //     throw new Error('No Service Worker support!');
  //   }
  //   if (!('PushManager' in window)) {
  //     throw new Error('No Push API Support!');
  //   }
  // };

  // const registerServiceWorker = async () => {
  //   const swRegistration = await navigator.serviceWorker.register('sw.js');
  //   return swRegistration;
  // };
  // const main = async () => {
  //   check();
  //   const swRegistration = await registerServiceWorker();
  // };
  // main();
  const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register('sw.js'); // notice the file name
    console.log(swRegistration);
    return swRegistration;
  };
  const main = async () => {
    const swRegistration = await registerServiceWorker();
  };
  main();
  return (
    <ChallengesProvider
      totalExperience={totalExperience}
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <FlexContent>
        <SidebarProvider>
          <Sidebar />
        </SidebarProvider>
        <Container>
          <Head>
            <title>Home | move.it</title>
          </Head>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </Container>
      </FlexContent>
    </ChallengesProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const {
    level,
    currentExperience,
    challengesCompleted,
    totalExperience,
  } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      totalExperience: Number(totalExperience),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

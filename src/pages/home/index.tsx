import React, { useContext, useEffect } from 'react';
import firebase from 'firebase';
import Head from 'next/head';

import { GetServerSideProps } from 'next';
import { firebaseCloudMessaging } from '../../../webPush.js';

import { Container, FlexContent } from '../../styles/home/styles';

import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import CompletedChallenges from '../../components/CompletedChallenges';
import Countdown from '../../components/Countdown';
import ChallengeBox from '../../components/ChallengeBox';
import Sidebar from '../../components/Sidebar';

import { CountdownProvider } from '../../contexts/CountdownContext';
import {
  ChallengeContext,
  ChallengesProvider,
} from '../../contexts/ChallengeContext';
import { SidebarProvider } from '../../contexts/SidebarContext';

interface CtxProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  totalExperience: number;
}

declare const self: any;

const Home: React.FC<CtxProps> = ({
  level,
  currentExperience,
  challengesCompleted,
  totalExperience,
}: CtxProps) => {
  const { startNewChallenge } = useContext(ChallengeContext);

  useEffect(() => {
    function getMessage() {
      const messaging = firebase.messaging();

      console.log({ messaging });

      messaging.onMessage(() => {
        const title = 'Hellow';
        const options = {
          body: 'world',
        };
        self.registration.showNotification(title, options);
      });
    }
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }
    setToken();
  });

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

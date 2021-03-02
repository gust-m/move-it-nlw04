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
}

const Home: React.FC<CtxProps> = ({
  level,
  currentExperience,
  challengesCompleted,
}: CtxProps) => {
  return (
    <ChallengesProvider
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
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

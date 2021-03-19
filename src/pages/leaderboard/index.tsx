import { GetServerSideProps } from 'next';
import { Container, Content, Header } from '../../styles/leaderboard/styles';

import Sidebar from '../../components/Sidebar/index';
import InputLeaderboard from '../../components/InputLeaderboard/index';
import { SidebarProvider } from '../../contexts/SidebarContext';
import { ChallengesProvider } from '../../contexts/ChallengeContext';

interface CtxProps {
  level: number;
  username: string;
  currentExperience: number;
  challengesCompleted: number;
  totalExperience: number;
}

const Leaderboard: React.FC<CtxProps> = ({
  level,
  username,
  currentExperience,
  challengesCompleted,
  totalExperience,
}: CtxProps) => {
  return (
    <Container>
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>

      <Content>
        <h1>Leaderboard</h1>
        <Header>
          <span>
            <p>POSITION</p>
            <p>USER</p>
          </span>
          <span>
            <p>CHALLENGES</p>
            <p>EXPERIENCE</p>
          </span>
        </Header>

        <ChallengesProvider
          totalExperience={totalExperience}
          level={level}
          currentExperience={currentExperience}
          challengesCompleted={challengesCompleted}
          username={username}
        >
          <InputLeaderboard
            name={username}
            challengesCompleted={147}
            experience={215899}
            level={47}
            position={1}
            image={`https://github.com/${username}.png`}
          />

          <InputLeaderboard
            name="test 1"
            challengesCompleted={120}
            experience={199999}
            level={43}
            position={2}
            image="https://pbs.twimg.com/profile_images/1293202325713100800/B9-b30wH_400x400.jpg"
          />
          <InputLeaderboard
            name="Jhon Doe"
            challengesCompleted={100}
            experience={184512}
            level={39}
            position={3}
            image="http://pm1.narvii.com/6298/d6a53da69940265e6cb6ecc0b49d84a2d41efe80_00.jpg"
          />
          <InputLeaderboard
            name="Fulano detal"
            challengesCompleted={98}
            experience={183014}
            level={38}
            position={4}
            image="https://cdn140.picsart.com/328743678006211.png?type=webp&to=min&r=640"
          />
        </ChallengesProvider>
      </Content>
    </Container>
  );
};

export default Leaderboard;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const {
    level,
    currentExperience,
    challengesCompleted,
    totalExperience,
    username,
  } = ctx.req.cookies;

  if (!username) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
  return {
    props: {
      level: Number(level),
      username,
      totalExperience: Number(totalExperience),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

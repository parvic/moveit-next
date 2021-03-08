import Head from 'next/head'

import * as S from "styles/pages/home";
import { CompletedChallenges } from 'components/CompletedChallenges';
import { Countdown } from 'components/Countdown';
import ExperienceBar from 'components/ExperienceBar';
import Profile from 'components/Profile';
import ChallengeBox from "components/ChallengeBox";
import { CountdownProvider } from 'context/CountdownContext';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from 'context/ChallengesContext';

interface HomeProps {
  level: number,
  currentXP: number,
  completedChallenges: number,
}

export default function Home(props: HomeProps) {


  return (
      <ChallengesProvider
      level={props.level}
      currentXP={props.currentXP}
      completedChallenges={props.completedChallenges}>
        <S.Container>
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
        </S.Container>
      </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentXP, completedChallenges } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentXP: Number(currentXP),
      completedChallenges: Number(completedChallenges),
    }
  }
}

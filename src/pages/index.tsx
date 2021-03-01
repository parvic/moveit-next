import Head from 'next/head'

import * as S from "../../styles/pages/home";
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import ChallengeBox from "../components/ChallengeBox";
import { CountdownProvider } from '../context/CountdownContext';

export default function Home() {
  return (
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
  )
}

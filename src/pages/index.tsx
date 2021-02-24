import Head from 'next/head'

import * as S from "../../styles/pages/home";
import { CompletedChallenges } from '../components/CompletedChallenges';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <S.Container>
        <ExperienceBar />
          <h1>TESTE</h1>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>

        <div>

        </div>
      </section>
    </S.Container>
  )
}

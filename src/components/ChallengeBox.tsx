import * as S from "../../styles/components/ChallengeBox";

export default function ChallengeBox() {
  const isActiveChalleng = true;
  return (
    <>
    { isActiveChalleng ? (
        <S.ChallengeActiveContainer>
          <header>Earn 400 xp</header>
          <main>
            <img src="icons/body.svg" alt=""/>
            <strong >Work out</strong>
            <p>Go Go Dev! Walk for three minutes and stetch your legs. Get Healthier!!!</p>
          </main>
          <footer>
            <button id="failedButton" type="button">I failed</button>
            <button id="successButton" type="button">Completed</button>
          </footer>
        </S.ChallengeActiveContainer>
      ) : (
        <S.ChallengeNotActiveContainer>
          <strong>Start a new cycle to get new challenges</strong>
          <div>
            <img src="icons/level-up.svg" alt="Leve up"/>
            <p>Complete these challenges to gain experience and level up</p>
          </div>
        </S.ChallengeNotActiveContainer>
      )
    }
    </>
  )
}

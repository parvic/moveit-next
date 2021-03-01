import { useContext } from "react";
import * as S from "../../styles/components/ChallengeBox";
import { ChallengesContext } from "../context/ChallengesContext";
import { CountdownContext } from "../context/CountdownContext";

export default function ChallengeBox() {

  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSuccessed() {
    completeChallenge();
    resetCountdown();

  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <>
    { activeChallenge ? (
        <S.ChallengeActiveContainer>
          <header>Earn {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong >Work out</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              id="failedButton"
              type="button"
              onClick={handleChallengeFailed}>
                I failed
            </button>
            <button
              id="successButton"
              type="button"
              onClick={handleChallengeSuccessed}>
                Completed
            </button>
          </footer>
        </S.ChallengeActiveContainer>
      ) : (
        <S.ChallengeNotActiveContainer>
          <strong>Start a new cycle to get new challenges</strong>
          <div>
            <img src="icons/level-up.svg" alt="Level up"/>
            <p>Complete these challenges to gain experience and level up</p>
          </div>
        </S.ChallengeNotActiveContainer>
      )
    }
    </>
  )
}

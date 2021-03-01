import { useContext } from "react";
import * as S from "../../styles/components/CompletedChallenges";
import { ChallengesContext } from "../context/ChallengesContext";

export function CompletedChallenges() {

  const { completedChallenges } = useContext(ChallengesContext)

  return (
    <S.CompletedChallengesContainer>
      <span>Completede Challenges</span>
      <span>{completedChallenges}</span>
    </S.CompletedChallengesContainer>
  );
}

import { useContext } from "react";
import * as S from "../../styles/components/Profile";
import { ChallengesContext } from "../context/ChallengesContext";

export default function Profile() {

  const { level } = useContext(ChallengesContext);

  return(
    <S.Profile>
      <img src="https://github.com/parvic.png" alt="Victor Parente"/>
      <div>
        <strong>Victor Parente</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </S.Profile>
  )
}

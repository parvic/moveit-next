import React, { useContext } from 'react';

import * as S from 'styles/components/ExperienceBar';
import { ChallengesContext } from 'context/ChallengesContext';

export default function ExperienceBar() {

  const { currentXP, xpToNextLevel } = useContext(ChallengesContext)

  const percent = Math.round((currentXP * 100) / xpToNextLevel);

  return (
    <S.ExperienceBar>
      <span>0 xp</span>
      <div>
        <S.GainedExperience style={{ width: `${percent}%` }} />
        <span style={{ left: `${percent}%` }}>{currentXP} xp</span>
      </div>
      <span>{xpToNextLevel} xp</span>
    </S.ExperienceBar>
  );
}

import React from 'react';
import * as S from '../../styles/components/ExperienceBar';

const ExperienceBar = () => (
  <S.ExperienceBar>
    <span>0 xp</span>
    <div>
      <S.GainedExperience style={{ width: '50%' }} />
      <span style={{ left: '50%' }}>300 xp</span>
    </div>
    <span>600 xp</span>
  </S.ExperienceBar>
);

export default ExperienceBar;

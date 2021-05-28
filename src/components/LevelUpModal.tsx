import { ChallengesContext } from 'context/ChallengesContext';
import { useContext } from 'react';
import * as S from 'styles/components/LevelUpModal';

export default function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="icons/close.svg" alt="Close button" />
        </button>

        <header>{level}</header>

        <strong>Congrats!</strong>

        <p>You've reached a new level</p>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
}

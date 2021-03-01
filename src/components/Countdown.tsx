import { useContext, useEffect, useState } from "react";
import * as S from "../../styles/components/Countdown";
import { CountdownContext } from "../context/CountdownContext";

export function Countdown() {

  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = minutes.toString().padStart(2, '0').split('');
  const [secondLeft, secondRight] = seconds.toString().padStart(2, '0').split('');

  return (
    <S.Container>
      <S.CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </S.CountdownContainer>

      { hasFinished ? <button type="button" disabled>Cycle done!</button> : (
          <>
            { isActive ? (
                <button className="countDownButtonActive" type="button" onClick={resetCountdown}>Abandon cycle</button>
              ) : (
                <button type="button" onClick={startCountdown}>Start a new cycle</button>
              )
            }
          </>
        )
      }
    </S.Container>
  );
}

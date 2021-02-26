import { useEffect, useState } from "react";
import * as S from "../../styles/components/Countdown";

export function Countdown() {

  let countdownTimeout: NodeJS.Timeout;

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = minutes.toString().padStart(2, '0').split('');
  const [secondLeft, secondRight] = seconds.toString().padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000);
    } else if (isActive && time === 0) {
        setIsActive(false);
        setHasFinished(true);
    }
  }, [isActive, time])

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

import { createContext, ReactNode, useEffect, useState } from "react";

import challenges from "../../challenges.json";

interface Challenge {
	type: 'eye' | 'body',  // since the type is a string and there's only those two types, we can declare this way
	description: string,
	amount: number, // the amount of XP of each challenge
}

interface ChallengeContextData {
  level: number,
  currentXP: number,
  completedChallenges: number,
  xpToNextLevel: number,
  activeChallenge: Challenge,
  levelUp: () => void,
  startNewChallenge: () => void,
  resetChallenge: () => void,
  completeChallenge: () => void,

}

interface ChallengesProviderProps {
  children: ReactNode,
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentXP, setCurrentXP] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState(0);
  const [activeChallenge, setAcativeChallenge] = useState(null);

  const xpToNextLevel = Math.pow((level + 1) * 4, 2);


  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setAcativeChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('New challenge', {
        body: `Earn ${challenge.amount}xp!`
      })
    }
  }

  function resetChallenge() {
    setAcativeChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalXP = currentXP + amount;
    if(finalXP >= xpToNextLevel) {
      finalXP = finalXP - xpToNextLevel;
      levelUp();
    }

    setCurrentXP(finalXP);
    setCompletedChallenges(completedChallenges + 1);
    setAcativeChallenge(null);
  }

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentXP,
        completedChallenges,
        levelUp,
        xpToNextLevel,
        activeChallenge,
        startNewChallenge,
        resetChallenge,
        completeChallenge }}>
      { children }
    </ChallengesContext.Provider>
  )
}

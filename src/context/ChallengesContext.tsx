import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie';

import challenges from "../../challenges.json";
import LevelUpModal from "components/LevelUpModal";

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
  closeLevelUpModal: () => void
}

interface ChallengesProviderProps {
  children: ReactNode,
  level: number,
  currentXP: number,
  completedChallenges: number
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentXP, setCurrentXP] = useState(rest.currentXP ?? 0);
  const [completedChallenges, setCompletedChallenges] = useState(rest.completedChallenges ?? 0);
  const [activeChallenge, setAcativeChallenge] = useState(null);
  const [isLevelUpModalActive, setIslevelUpModalActive] = useState(false);

  const xpToNextLevel = Math.pow((level + 1) * 4, 2);


  function levelUp() {
    setLevel(level + 1);
    setIslevelUpModalActive(true);
  }

  function closeLevelUpModal() {
    setIslevelUpModalActive(false);
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

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentXP', String(currentXP));
    Cookies.set('completedChallenges', String(completedChallenges));
  }, [level, currentXP, completedChallenges])

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentXP,
        completedChallenges,
        xpToNextLevel,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal }}>
      { children }

      { isLevelUpModalActive && <LevelUpModal />}

    </ChallengesContext.Provider>
  )
}

import GlobalStyles from "../../styles/global";

import { ChallengesProvider } from "../context/ChallengesContext";

function App({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default App

import GlobalStyles from "styles/global";

import { ThemeProvider } from "styled-components";
import light from "styles/themes/light";
import dark from "styles/themes/dark";
import NavBar from 'components/NavBar';
import userPersistedState from "utils/userPersistedState";

function App({ Component, pageProps }) {

  const [theme, setTheme] = userPersistedState('theme', light);

	const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    console.log(theme.title)
	};

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <NavBar toggleTheme={toggleTheme} theme={theme} />

      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default App;

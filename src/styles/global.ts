import { createGlobalStyle } from 'styled-components';
import light from "styles/themes/light";
import dark from "styles/themes/dark";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body, button, input, textarea {
    font: 400, 1rem, 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
    /* outline: none; */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%; // This will reduce the font size by one pixel from the default 16px = 15px
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%; // This will reduce the font size by two pixel from the default 16px = 14px
    }
  }

`;

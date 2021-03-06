import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      card: string;
      background: string;
      completedChallengeTitle: string;
      grayLine: string;
      text: string;
      textHighlight: string;
      title: string;
      red: string;
      green: string;
      blue: string;
      blueDark: string;
      blueTwitter: string;
    },
  }
}

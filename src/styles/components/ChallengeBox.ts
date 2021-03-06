import styled from "styled-components";
import light from "styles/themes/light";
import dark from "styles/themes/dark";

export const ChallengeNotActiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  /* padding: 0rem 4rem; */

  background-color: ${light.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  text-align: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height:1.4;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;
    max-width: 70%;

    img {
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
    }

    p{
      color: ${light.colors.text};
      font-size: 1rem;
      line-height: 1.4;
    }
  }

`;

export const ChallengeActiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 2rem 3rem;

  background-color: ${light.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  text-align: center;

  header {
    width: 100%;
    font-weight: 600;
    padding-bottom: 1.5rem;
    color: ${light.colors.blue};
    border-bottom: 1px solid ${light.colors.grayLine};
  }

  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 9rem;
      height: 9rem;
    }

    strong {
      color: ${light.colors.title};
      font-size: 2rem;
      font-weight: 600;
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 3rem;
      border: 0;
      border-radius: 5px;

      color: ${light.colors.white};
      font-size: 1rem;
      font-weight: 600;

      &:hover {
        filter: brightness(0.9);
      }
    }

    & #failedButton {
      background-color: ${light.colors.red}
    }

    & #successButton {
      background-color: ${light.colors.green}
    }



  }

`;

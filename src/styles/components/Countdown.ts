import styled from "styled-components";
import light from "styles/themes/light";
import dark from "styles/themes/dark";

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${light.colors.title};

  & > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: ${light.colors.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child{
      border-right: 1px solid ${light.colors.background};
    }

    span:last-child{
      border-left: 1px solid ${light.colors.background};
    }
  }

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }


`;

export const Container = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 5rem;
    margin-top: 2rem;

    color: ${light.colors.white};
    font-size: 1.25rem;
    font-weight: 600;

    background-color: ${light.colors.blue};
    border-radius: 5px;
    border: 0;

    transition: background-color 0.2s;

    &:not(:disabled):hover {
      background-color: ${light.colors.blueDark};
    }

    &:disabled {
      background-color: ${light.colors.white};
      color: ${light.colors.text};
      cursor: not-allowed;
    }
  }

  .countDownButtonActive {
    background-color: ${light.colors.white};
    color: ${light.colors.title};

    &:not(:disabled):hover {
      background-color: ${light.colors.red};
      color: ${light.colors.white};
    }
  }

`;

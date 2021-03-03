import styled from "styled-components";
import theme from "../theme";

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${theme.colors.title};

  & > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: ${theme.colors.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child{
      border-right: 1px solid ${theme.colors.background};
    }

    span:last-child{
      border-left: 1px solid ${theme.colors.background};
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

    color: ${theme.colors.white};
    font-size: 1.25rem;
    font-weight: 600;

    background-color: ${theme.colors.blue};
    border-radius: 5px;
    border: 0;

    transition: background-color 0.2s;

    &:not(:disabled):hover {
      background-color: ${theme.colors.blueDark};
    }

    &:disabled {
      background-color: ${theme.colors.white};
      color: ${theme.colors.text};
      cursor: not-allowed;
    }
  }

  .countDownButtonActive {
    background-color: ${theme.colors.white};
    color: ${theme.colors.title};

    &:not(:disabled):hover {
      background-color: ${theme.colors.red};
      color: ${theme.colors.white};
    }
  }

`;

import Link from "next/link";
import styled, { ThemeContext } from "styled-components";



export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 5rem;
  height: 100%;

  background-color: ${props => props.theme.colors.white};

  a {
    padding: 1rem;

    color: gray;

    svg {
      width: 2rem;
      height: 2rem;
    }

    &:hover {
      color: ${props => props.theme.colors.blue};
    }
  }

  & > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
  }


  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    border: 0;
    width: 100%;

    background-color: ${props => props.theme.colors.white};

    color: gray;
    font-size: 0px;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    .handle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 0;
    }
  }
`;

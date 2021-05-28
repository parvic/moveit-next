import styled, { ThemeContext } from "styled-components";

import light from "styles/themes/light";


export const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(242, 243, 245, 0.8);
`;

export const ModalContainer = styled.div`
  position: relative;

  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;

  background-color: ${props => props.theme.colors.card};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  text-align: center;

  button {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;

    background: none;
    border: 0;
    font-size: 0px;
  }

  header {
    font-size: 7rem;
    font-weight: 600;
    color: ${props => props.theme.colors.blue};

    background: url("/icons/levelup.svg") no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${props => props.theme.colors.title};
  }

  p {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text};

    margin-top: 0.25rem;
  }
`;

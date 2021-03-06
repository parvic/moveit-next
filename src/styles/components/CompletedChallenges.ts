import styled from "styled-components";
import light from "styles/themes/light";
import dark from "styles/themes/dark";

export const CompletedChallengesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${light.colors.grayLine};

  font-weight: 500;

  & span:first-child {
    font-size: 1.25rem;
  }

  & span:last-child {
    font-size: 1.5rem;
  }
`;

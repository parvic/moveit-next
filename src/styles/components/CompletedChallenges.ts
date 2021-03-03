import styled from "styled-components";
import theme from "../theme";

export const CompletedChallengesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${theme.colors.grayLine};

  font-weight: 500;

  & span:first-child {
    font-size: 1.25rem;
  }

  & span:last-child {
    font-size: 1.5rem;
  }
`;

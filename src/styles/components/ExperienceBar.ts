import styled from 'styled-components';
import light from "styles/themes/light";
import dark from "styles/themes/dark";

export const ExperienceBar = styled.header`
  display:flex;
  align-items: center;

  span {
    font-size: 1rem
  }

  & > div {
    position: relative;
    flex: 1;
    height: 4px;
    border-radius: 4px;
    margin: 0 1.5rem;

    background-color: ${light.colors.grayLine};

    span {
      position: absolute;
      transform: translateX(-50%);
      top: 12px;
    }
  }

`;

export const GainedExperience = styled.div`
  height: 4px;
  border-radius: 4px;
  background-color: ${light.colors.green};
`;

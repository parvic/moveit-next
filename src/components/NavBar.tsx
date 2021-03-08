import Switch from "react-switch";

import * as S from "styles/components/NavBar";
import { IoHomeOutline, IoMedalOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import light from "styles/themes/light";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

interface Props {
  toggleTheme(): void;
}

const SideBar: React.FC<Props> = ({ toggleTheme}) => {

  const { colors, title } = useContext(ThemeContext);

  return(
    <S.NavBarContainer>
        <a href="/">
          <img src="logo.svg" alt="Move.it logo"/>
        </a>

      <div>
          <a href="/">
            <IoHomeOutline />
          </a>

          <a href="/ranking">
            <IoMedalOutline />
          </a>
      </div>

        <button type="button">
        <Switch
          onChange={toggleTheme}
          checked={false}
          checkedIcon={false}
          uncheckedIcon={false}
          checkedHandleIcon={ <div className="handle"> <IoMoonOutline color="gray" /> </div>}
          uncheckedHandleIcon={ <div className="handle"> <IoSunnyOutline color="gray" /> </div>}
          offColor={colors.blue}
          onColor={colors.grayLine}
        />
        </button>
    </S.NavBarContainer>
  );
}

export default SideBar;

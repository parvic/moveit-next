import Switch from 'react-switch';
import { useRouter } from 'next/router';

import * as S from 'styles/components/NavBar';
import {
  IoHomeOutline,
  IoMedalOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from 'react-icons/io5';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

interface Props {
  toggleTheme(): void;
  theme: string;
}

const SideBar: React.FC<Props> = ({ toggleTheme, theme }) => {
  const { colors, title } = useContext(ThemeContext);
  const router = useRouter();

  return (
    <S.NavBarContainer>
      <a href="/">
        <img src="logo.svg" alt="Move.it logo" />
      </a>

      <div>
        {router.pathname === '/' ? (
          <a href="/" style={{ borderLeft: `0.25rem solid ${colors.blue}` }}>
            <IoHomeOutline color={colors.blue} />
          </a>
        ) : (
          <a href="/">
            <IoHomeOutline color="gray" />
          </a>
        )}

        {/* { router.pathname === '/ranking' ?
          <a href="/ranking" style={{ borderLeft: `0.25rem solid ${colors.blue}` }}>
            <IoMedalOutline color={colors.blue}  />
          </a>
        :
          <a href="/ranking">
            <IoMedalOutline color='gray' />
          </a>
        } */}
      </div>

      <button type="button">
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          checkedHandleIcon={
            <div className="handle">
              {' '}
              <IoMoonOutline color="gray" />{' '}
            </div>
          }
          uncheckedHandleIcon={
            <div className="handle">
              {' '}
              <IoSunnyOutline color="gray" />{' '}
            </div>
          }
          offColor={colors.blue}
          onColor={colors.background}
        />
      </button>
    </S.NavBarContainer>
  );
};

export default SideBar;

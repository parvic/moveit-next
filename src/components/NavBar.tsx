import Switch from "react-switch";

import * as S from "styles/components/NavBar";
import { IoHomeOutline, IoMedalOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Link from "next/link";
// import Link from "next/link";


export default function SideBar() {



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
          onChange={() => {}}
          checked={true}
          checkedIcon={false}
          uncheckedIcon={false}
          checkedHandleIcon={ <div className="handle"> <IoSunnyOutline color="gray" /> </div>}
          uncheckedHandleIcon={ <div className="handle"> <IoMoonOutline color="gray" /> </div>}

        />
        </button>
    </S.NavBarContainer>
  )
}

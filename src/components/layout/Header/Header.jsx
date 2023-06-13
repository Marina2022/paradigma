import s from "./header.module.scss";

import {useState} from "react";

import Logo from "../../sharedComponents/Logo/Logo";
import Phone from "../../sharedComponents/Phone/Phone";
import MobileMenu from "./MobileMenu/MobileMenu";
import Menu from "../../sharedComponents/Menu/Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={s.mainHeader}>
      <div className={s.headerContainer}>
        <div className={s.wrapper}>
          <Logo classname={s.logo}/>
          <Menu />
          <Phone classname={s.phone}/>
          <button onClick={()=>setIsMenuOpen(true)}  className={s.mobileBtn}></button>
          {
            isMenuOpen &&
            <MobileMenu setIsMenuOpen={setIsMenuOpen} />
          }
        </div>
      </div>
    </header>
  );
};

export default Header;

import s from "./header.module.scss";

import {useState} from "react";

import Logo from "../../sharedComponents/Logo/Logo";
import Phone from "../../sharedComponents/Phone/Phone";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <header className={s.mainHeader}>
      <div className={s.headerContainer}>
        <div className={s.wrapper}>
          <Logo classname={s.logo}/>
          <ul className={s.menu}>
            <li className={s.menuItem}><a href="#" className={s.menuLink} title="НАШИ УСЛУГИ">НАШИ УСЛУГИ</a></li>
            <li className={s.menuItem}><a href="#" className={s.menuLink} title="О НАС">О НАС</a></li>
            <li className={s.menuItem}><a href="#" className={s.menuLink} title="СТАТЬИ">СТАТЬИ</a></li>
            <li className={s.menuItem}><a href="#" className={s.menuLink} title="БЛОГ">БЛОГ</a></li>

          </ul>
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

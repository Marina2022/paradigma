import s from './Menu.module.scss';
import cn from "classnames";
import {NavLink} from "react-router-dom";

const Menu = ({classname}) => {
  return (
    <ul className={cn(s.menu, classname)}>
      <li><NavLink to="/" className={s.menuLink} title="НАШИ УСЛУГИ">НАШИ УСЛУГИ</NavLink></li>
      <li><NavLink to="#" className={s.menuLink} title="О НАС">О НАС</NavLink></li>
      <li><NavLink  to="articles" className={({ isActive }) =>
          isActive ? s.menuLinkActive  : s.menuLink
      }  title="СТАТЬИ">СТАТЬИ</NavLink></li>
      <li><NavLink to="#" className={s.menuLink} title="БЛОГ">БЛОГ</NavLink></li>
    </ul>
  );
};

export default Menu;

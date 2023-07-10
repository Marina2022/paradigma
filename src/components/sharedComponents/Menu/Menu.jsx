import s from './Menu.module.scss';
import cn from "classnames";

const Menu = ({classname}) => {
  return (
    <ul className={cn(s.menu, classname)}>
      <li><a href="/" className={s.menuLink} title="НАШИ УСЛУГИ">НАШИ УСЛУГИ</a></li>
      <li><a href="/" className={s.menuLink} title="О НАС">О НАС</a></li>
      <li><a href="/" className={s.menuLink} title="СТАТЬИ">СТАТЬИ</a></li>
      <li><a href="/" className={s.menuLink} title="БЛОГ">БЛОГ</a></li>
    </ul>
  );
};

export default Menu;

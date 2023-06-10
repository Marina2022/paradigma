import s from './MobileMenu.module.scss'
import Phone from "../../../sharedComponents/Phone/Phone";
import closeBtn from '../../../../assets/close-btn.svg'
import {useRef} from "react";

const MobileMenu = ({setIsMenuOpen}) => {

  const onClose = () => {
    setIsMenuOpen(false)
  }

  const overlayRef = useRef(null)

  const onOverlayClick = (e) => {
    if (e.target === overlayRef.current)
      setIsMenuOpen(false)
  }

  return (
    <div>
      <div ref={overlayRef} className="overlay" onClick={onOverlayClick}>
        <ul className={s.mobileMenu}>
          <li>
            <button className={s.mobileCloseBtn} onClick={onClose}><img src={closeBtn} alt="close button"/></button>
          </li>
          <li className={s.mobileMenuItem}><a href="#" className={s.mobileMenuLink}>НАШИ УСЛУГИ</a></li>
          <li className={s.mobileMenuItem}><a href="#" className={s.mobileMenuLink}>О НАС</a></li>
          <li className={s.mobileMenuItem}><a href="#" className={s.mobileMenuLink}>СТАТЬИ</a></li>
          <li className={s.mobileMenuItem}><a href="#" className={s.mobileMenuLink}>БЛОГ</a></li>
          <li className={s.mobileMenuItem}><Phone classname={s.mobilePhone}/></li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

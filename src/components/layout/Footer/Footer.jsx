import Logo from "../../sharedComponents/Logo/Logo";

import s from './Footer.module.scss'

import Menu from "../../sharedComponents/Menu/Menu";
import Phone from "../../sharedComponents/Phone/Phone";
import Socials from "../../sharedComponents/Socials/Socials";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <div className={s.wrapper}>
          <Logo classname={s.logo}/>
          <Menu classname={s.menu} />
          <Phone classname={s.phone}/>
          <div className={s.copy}>Все права защищены ©2023</div>
          <Socials classname={s.socials}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import s from './Logo.module.scss';

import logo from "../../../assets/logo.svg";
import cn from "classnames";


const Logo = ({classname}) => {
  return (
    <a href='/' className={cn(s.logo, classname)}>
      <img src={logo} alt="Логотип"/>
    </a>
  );
};

export default Logo;

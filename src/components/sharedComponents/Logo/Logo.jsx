import s from './Logo.module.scss';

import logo from "../../../assets/logo.svg";
import cn from "classnames";
import {Link} from "react-router-dom";

const Logo = ({classname}) => {
  return (
    <Link to='/' className={cn(s.logo, classname)}>
      <img src={logo} alt="Логотип"/>
    </Link>
  );
};

export default Logo;

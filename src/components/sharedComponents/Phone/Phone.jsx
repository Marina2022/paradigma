import s from './Phone.module.scss';
import cn from "classnames";

const Phone = ({classname}) => {
  return (
      <a className={cn(s.phone, classname)} href="tel:+79205465610">8 920 546 56 10</a>
  );
};

export default Phone;

import s from './Socials.module.scss';
import wiber from '../../../assets/socials/wiber.svg'
import tg from '../../../assets/socials/tg.svg'
import vk from '../../../assets/socials/vk.svg'
import cn from "classnames";

const Socials = ({classname}) => {
  return (
    <ul className={cn(s.socials, classname)}>
      <li>
        <a href="#" className="">
          <img src={wiber} alt="wiber icon"/>
        </a>
      </li>
      <li>
        <a href="#" className="">
          <img src={tg} alt="tg icon"/>
        </a>
      </li>
      <li>
        <a href="#" className="">
          <img src={vk} alt="vk icon"/>
        </a>
      </li>
    </ul>
  );
};

export default Socials;

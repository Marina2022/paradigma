import s from './Hero.module.scss';
import heroImage from '../../../../assets/hero/hero-iimage.png'
import Button from "../../../sharedComponents/Button/Button";
import Socials from "../../../sharedComponents/Socials/Socials";
import {useNavigate} from "react-router-dom";

const Hero = () => {
  
  const navigate = useNavigate()
  
  return (
    <div className={s.hero}>
      <div className="container hero">
        <div className={s.wrapper}>
          <div className={s.content}>
            <h1 className={s.title}>IT решения для&nbsp;вашего бизнеса</h1>
            <p className={s.text}>
              <span className={s.coloredText}>«Офис за рубежом»</span> - комплексная услуга по организации сервера
              компании за рубежом и возможность настройки сервиса удалённого рабочего стола для каждого сотрудника,
              обеспечим зашифрованное соединение с сервером тем самым ваш трафик будет надёжно защищён от внешних угроз,
              направленных на перехват трафика. Разумеется, услуги можно комбинировать и, например, создать архитектуру
              безопасного защищённого виртуального офиса с 1С находящегося за рубежом.
            </p>
            <Button onclick={()=>navigate('/audit')} text={"Заказать услугу"}></Button>

          </div>
          <div>
            <div className={s.imgWrapper}>
              <img className={s.image} src={heroImage} alt=""/>
            </div>
            <Socials classname={s.socials}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

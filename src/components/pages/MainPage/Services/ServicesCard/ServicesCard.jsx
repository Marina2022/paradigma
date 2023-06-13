import s from './ServicesCard.module.scss';
import serviceTitleImg from '../../../../../assets/services/card-icon.svg'
import cn from "classnames";
import OrderButton from "../../../../sharedComponents/OrderButton/OrderButton";

const ServicesCard = ({name, price, perWhat, features}) => {
  return (
    <div className={s.card}>
      <h3 className={s.title}>
        <img src={serviceTitleImg} alt="icon"/>
        <span className={s.titleText}>{name}</span>
      </h3>
      <div className={s.priceWrapper}>
        <span className={price}>{price.toLocaleString()}₽</span>
        <sup>/{perWhat}</sup>
      </div>
      <ul className={s.featuresList}>
        {
          features.map((feature, index) => {
            return (
              <li key={index} className={cn({[s.featuresItem]: true, [s.featuresItemInactive]: !feature.active})}>
                <div dangerouslySetInnerHTML={{__html: feature.featureName}}></div>
              </li>
            )
          })
        }
      </ul>
      <OrderButton text={"Заказать"} classname={s.cardBtn} />
    </div>
  );
};

export default ServicesCard;

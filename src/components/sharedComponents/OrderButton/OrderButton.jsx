import s from './OrderButton.module.scss';

const OrderButton = ({text}) => {
  return (
    <button className={s.btn}>
      {text}
    </button>
  );
};

export default OrderButton;

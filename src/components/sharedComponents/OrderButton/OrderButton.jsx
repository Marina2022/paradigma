import s from './OrderButton.module.scss';
import cn from "classnames";

const OrderButton = ({text, classname, onClick}) => {
  
  
  return (
    <button onClick={onClick} className={cn(s.btn, classname)}>
      {text}
    </button>
  );
};

export default OrderButton;

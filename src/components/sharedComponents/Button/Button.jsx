import s from './Button.module.scss';

const Button = ({text, onclick}) => {
  return (
    <button onClick={onclick} className={s.btn}>
      {text}
    </button>
  );
};

export default Button;

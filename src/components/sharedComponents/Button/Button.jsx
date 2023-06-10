import s from './Button.module.scss';

const Button = ({text}) => {
  return (
    <button className={s.btn}>
      {text}
    </button>
  );
};

export default Button;

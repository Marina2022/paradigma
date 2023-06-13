import s from './OneArticle.module.scss';

const OneArticle = ({id, imageUrl, title, text, date}) => {

  return (
    <li className={s.articlesItem} >
      <img className={s.image} src={imageUrl} alt="article"/>
      <h3 className={s.title}>{title}</h3>
      <p className={s.text}>{text}</p>
      <div className={s.date}>{date}</div>
      <a className={s.link} href="#">Читать полностью</a>
    </li>
  );
};

export default OneArticle;

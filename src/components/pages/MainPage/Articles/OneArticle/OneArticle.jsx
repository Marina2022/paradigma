import s from './OneArticle.module.scss';
import {Link} from "react-router-dom";

const OneArticle = ({id, imageUrl, title, text, date, url}) => {

  return (
    <li className={s.articlesItem} >
      <img className={s.image} src={imageUrl} alt="article"/>
      <h3 className={s.title}>{title}</h3>
      <p className={s.text}>{text}</p>
      <div className={s.date}>{date}</div>
      <Link className={s.link} to={`/articles/${url}`}>Читать полностью</Link>
    </li>
  );
};

export default OneArticle;

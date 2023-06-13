import s from './Articles.module.scss';
import {articles} from "../../../../mocks/articles";
import OneArticle from "./OneArticle/OneArticle";

const Articles = () => {
  return (
    <div className={s.articles}>
      <div className="container">
        <h2 className={s.title}>СТАТЬИ</h2>
        <ul className={s.articlesList}>
          {
            articles.map((article, index)=>{
              return (
                <OneArticle {...article} key={article.id} />
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Articles;

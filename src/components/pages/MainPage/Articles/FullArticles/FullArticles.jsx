import s from './FullArticles.module.scss';

import OneArticle from "../OneArticle/OneArticle";
import {articlesFullList} from "../../../../../mocks/articles";
import BackButton from "../../../../sharedComponents/BackButton/BackButton";

const FullArticles = () => {


  return (
      <div className={s.articles}>
        <div className="container">
          <BackButton classname={s.backBtn} />
          <h2 className={s.title}>СТАТЬИ</h2>
          <ul className={s.articlesList}>
            {
              articlesFullList.map((article, index) => {
                return (
                    <OneArticle {...article} key={article.id}/>
                )
              })
            }
          </ul>
        </div>
      </div>
  );
};

export default FullArticles;

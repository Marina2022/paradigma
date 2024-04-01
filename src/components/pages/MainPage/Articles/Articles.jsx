import s from './Articles.module.scss';
import {articles} from "../../../../mocks/articles";
import OneArticle from "./OneArticle/OneArticle";
import {useEffect, useState} from "react";

const Articles = () => {

  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowAll(false)
    }

  }, [])

  // todo - убери потом
  // useEffect(() => {
  //   fetch('http://185.178.44.121/api/category/smartfoni-781001bc-3a72-4e5b-8d2a-ee22e0ea7b0a/products?page=1&pageSize=20')
  //       .then(res=>res.json())
  //       .then(console.log)
  // }, []);

  const [showAll, setShowAll] = useState(true)

  return (
    <div className={s.articles}>
      <div className="container">
        <h2 className={s.title}>СТАТЬИ</h2>
        <ul className={s.articlesList}>
          {
            showAll && articles.map((article, index) => {
              return (
                <OneArticle {...article} key={article.id}/>
              )
            })
          }

          {
            !showAll && articles.slice(0, 3).map((article, index) => {
              return (
                <OneArticle {...article} key={article.id}/>
              )
            })
          }

          {
            !showAll && <button className={s.showAllBtn} onClick={()=>setShowAll(true)}>Показать еще ↓</button>
          }
        </ul>
      </div>
    </div>
  );
};

export default Articles;

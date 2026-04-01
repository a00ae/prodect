import { memo } from "react";
import styles from "./css/Blog.module.scss";
import Box from "./Nodos/Box";
import { useBoxData } from "./context/BoxProvider";
import { BoxSection } from "./opp/opp";
import { useProducts } from "./context/ProductProvider";

const Blog = () => {
  const blog = useBoxData(BoxSection.Blog);
  const { blogArticles } = useProducts();
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <Box {...blog} />

        {blogArticles.map(({date, id, title, img, desc, section}) => {
          return (
            <div key={id} className={styles["card-container"]}>
              <a href="#">
                <div className={styles["text-card"]}>
                  <div className={styles.top}>
                    <span>{date}</span>
                    <h3>{title}.</h3>
                  </div>
                  <div className={styles.bottom}>
                    <p>
                      {desc}.
                    </p>
                  </div>
                </div>
                <div className={styles.image} data-section={section}>
                  <img src={img} alt={title} />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Blog);

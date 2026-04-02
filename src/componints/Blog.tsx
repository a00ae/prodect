import { memo } from "react";
import styles from "./css/Blog.module.scss";
import Box from "./Nodos/Box";
import { useBoxData } from "./context/BoxProvider";
import { BoxSection } from "./opp/opp";
import { useProducts } from "./context/ProductProvider";
import SectionCard from "./Nodos/SectionCard";

const Blog = () => {
  const blog = useBoxData(BoxSection.Blog);
  const { blogArticles } = useProducts();
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <Box {...blog}  isAnimated={true}/>

        {blogArticles.map(({date, id, title, img, desc, section, isActive}) => {
          return (
            <SectionCard isActive={!!isActive} data={{date, id, title, img, desc, section,}}/>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Blog);

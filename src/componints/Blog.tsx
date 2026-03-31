import { memo } from "react";
import styles from "./css/Blog.module.scss";
import Box from "./Nodos/Box";
import { useBoxData } from "./context/BoxProvider";
import { BoxSection } from "./opp/opp";

const Blog = () => {
  const blog = useBoxData(BoxSection.Blog);
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <Box {...blog} />
      </div>
    </div>
  );
};

export default memo(Blog);

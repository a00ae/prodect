import type { Blog } from "../opp/opp";
import styles from "../css/Blog.module.scss"

interface Props {
    data: Blog;
}


function SectionCard({data}: Props) {
  return (
    <div key={data.id} className={styles["card-container"]}>
      <a href="#">
        <div className={styles["text-card"]}>
          <div className={styles.top}>
            <span>{data.date}</span>
            <h3>{data.title}.</h3>
          </div>
          <div className={styles.bottom}>
            <p>{data.desc}.</p>
          </div>
        </div>
        <div className={styles.image} data-section={data.section}>
          <img src={data.img} alt={data.title} />
        </div>
      </a>
    </div>
  );
}

export default SectionCard;

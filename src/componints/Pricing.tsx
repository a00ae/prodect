import { useBoxData } from "./context/BoxProvider";
import styles from "./css/Pricing.module.scss";
import Box from "./Nodos/Box";
type Props = {};

function Pricing({}: Props) {
  const { pricing } = useBoxData();
  return (
    <div className={styles.pricing}>
      <div className={styles.container}>
        <Box title={pricing.title} text={pricing.text} />
      </div>
    </div>
  );
}

export default Pricing;

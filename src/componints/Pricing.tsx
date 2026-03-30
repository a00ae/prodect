import { RiCheckboxCircleLine } from "@remixicon/react";
import { useBoxData } from "./context/BoxProvider";
import styles from "./css/Pricing.module.scss";
import Box from "./Nodos/Box";
import Btn from "./Nodos/Btn";
import { useProducts } from "./context/ProductProvider";
import { useEffect, useRef, useState } from "react";
type Props = {};

function Pricing({}: Props) {
  const { pricing } = useBoxData();
  const { pricingCard } = useProducts();
  const [check, setCheck] = useState<boolean>()

  const priceRef = useRef<HTMLDivElement>(null);
  const [, setScrollInside] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // شرط التحقق من العنصر
      if (!priceRef.current) return;
      // مراقبة العنصر
      const rect = priceRef.current.getBoundingClientRect();
      // تقدم العنصر
      const windowHeight = window.innerHeight;

      // حساب نسبة الظهور (تبدأ من 0 عند دخول العنصر وتنتهي بـ 1 بعد سكرول 400 بكسل)
      // const distanceIntoView = windowHeight - rect.top;
      // const progress = Math.max(0, Math.min(1, distanceIntoView / 100000));
      // حساب المسافة الكلية التي يقطعها العنصر داخل مجال الرؤية
      const totalDistance = windowHeight + rect.height;
      const currentDistance = windowHeight - rect.top;

      // حساب النسبة المئوية للظهور من 0 إلى 1 (منذ لحظة دخوله من الأسفل وحتى خروجه من الأعلى)
      const progress = Math.max(
        0,
        Math.min(1, currentDistance / totalDistance),
      );

      // تحديث متغير CSS مباشرة على العنصر الأب لضمان أداء عالي
      priceRef.current.style.setProperty(
        "--scroll-progress",
        progress.toString(),
      );
      setScrollInside(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // مصفوفة فارغة لضمان تعريف الحدث مرة واحدة فقط

  return (
    <div className={styles.pricing}>
      <div className={styles.container}>
        <Box title={pricing.title} text={pricing.text} />

        <div ref={priceRef} className="price">
          {pricingCard.map(({ title, month, desc, price, discount }) => (
            <div key={title} className={styles["box-container-card-price"]}>
              <div className={`top-transform ${title}`}></div>

              <div className={`${styles["price-card"]} ${title}`}>
                <div className="top">
                  <div className={styles["title-top"]}>
                    {discount ? (
                      <div className="title-discount-top">
                        <p>{title}</p>
                        <span>|</span>
                        <p>Popular</p>
                      </div>
                    ) : (
                      <p>{title}</p>
                    )}

                    {title == "Project-based" ? null : (
                      <div className={styles["check-box"]}>
                        <label className={styles.switch}>
                          <input  type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                        <p>Yearly</p>
                      </div>
                    )}
                  </div>
                  <div className={styles["price-componints"]}>
                    {discount ? (
                      <>
                        <p className="discount">${discount}</p>
                        <p>${month}</p>
                      </>
                    ) : (
                      
                      <p>${month}</p>
                    )}

                    <span>/{title == "Project-based" ? "project" : "month"}</span>
                  </div>
                  <div className={styles["price-desc"]}>
                    <p>{desc}.</p>
                  </div>
                </div>
                <div className="dashad"></div>
                <div className="middle">
                  <p>What's included:</p>
                  {price.map(({ id, "price-title": priceTitle }) => (
                    <div key={id} className={styles.box}>
                      <RiCheckboxCircleLine />
                      <p>{priceTitle}</p>
                    </div>
                  ))}
                </div>
                <div className="dashad"></div>
                <Btn
                  color={discount ? "defult" : "black"}
                  title="Get startad"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;

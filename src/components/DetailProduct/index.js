import React from "react";
import { useParams } from "react-router-dom";
import useGetForId from "../../Hooks/useGetForId";
import styles from "./styles.module.css";

const DetailsProduts = () => {
  let { productId } = useParams();
  const { data } = useGetForId(productId);
  console.log(data);
  return (
    <section className={styles["product"]}>
      <div className={styles["product-img"]}>
        <img
          className={styles["product-img"]}
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className={styles["product-text"]}>
        <h1 className={styles["product-text--h1"]}>{data.title}</h1>
        <h3 className={styles["product-text--h3"]}>Agua Mineral Vode</h3>
        <ul className={styles["product-text--ul"]}>
          {data.details.map((item) => {
            return <li className={styles["product-text--li"]}>{item}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default DetailsProduts;

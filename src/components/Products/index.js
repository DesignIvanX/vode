import React from "react";
import useGetFilterData from "../../Hooks/useGetFilterData.js";
import styles from "./styles.module.css";

const Products = () => {
  const { filteredData } = useGetFilterData();
  return (
    <div className={styles["products"]}>
      {filteredData.map((item) => {
        return (
          <a
            className={styles["products-content"]}
            href={`/product/${item.id}`}
            key={item.id}
          >
            <img
              className={styles["products-content--img"]}
              src={item.image}
              alt={item.title}
            />
            <h3 className={styles["products-content--h3"]}>{item.title}</h3>
          </a>
        );
      })}
    </div>
  );
};

export default Products;

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
      <div className={styles["product-content"]}>
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
      </div>
      <div className={styles["product-description"]}>
        <h2 className={styles["product-description--h2"]}>Descripcion</h2>
        <p className={styles["product-description--p"]}>
          Vode es un agua excepcional. Cada gota de Vode es el resultado de un
          proceso de filtración natural que dura décadas, garantizando su pureza
          y composición única. La combinación precisa de minerales en Vode
          incluye el equilibrio perfecto de bicarbonato, potasio, manganeso,
          magnesio, sílice y calcio. Estos elementos esenciales para la salud
          humana se fusionan en nuestra agua de manera natural desde su origen,
          otorgándole un sabor puro y refrescante que deleita los sentidos. La
          pureza inigualable de Vode no solo se traduce en su sabor excepcional,
          sino también en sus beneficios para el organismo. Cada sorbo de Vode
          es una invitación a hidratar tu cuerpo con una fuente de vitalidad que
          nutre y revitaliza. Nuestra agua representa la armonía perfecta entre
          la naturaleza y el bienestar, brindándote una experiencia única que
          solo Vode puede ofrecer. Descubre la esencia de la pureza y la
          vitalidad con Vode, una marca comprometida con traerte lo mejor de la
          naturaleza en cada botella.
        </p>
      </div>
    </section>
  );
};

export default DetailsProduts;

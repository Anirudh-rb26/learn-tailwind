import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a Better Card Deal <br className="sm:block hidden" />
          in a few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Arcu totor, purus in matis at sed integer faucibus. Aliquet quis
          aliquet eger mauris tortor. c Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10"></Button>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;

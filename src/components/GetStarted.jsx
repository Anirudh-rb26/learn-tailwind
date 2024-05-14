import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-blue hover:bg-primary transition ease-in duration-50 w-[100%] h-[100%] rounded-full `}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppings font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow pointing top right"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppings font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;

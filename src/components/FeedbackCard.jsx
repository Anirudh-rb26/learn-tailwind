import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 feedback-card">
      <img
        src={quotes}
        alt="person"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        {content}
      </p>
    </div>
  );
};

export default FeedbackCard;

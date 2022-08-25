import React, { useState } from "react";
import { price } from "../constants";
import styles from "../style";
import PriceCard from "./PriceCard";

const Pricing = () => {
  const [activePrice, setActivePrice] = useState(1);

  const handleChange = (event) => {
    if (event.target.checked) {
      setActivePrice(2);
    } else {
      setActivePrice(1);
    }
  };

  return (
    <section
      className={`my-[80px] sm:my-[140px] ${styles.flexCenter} flex-col w-full`}
    >
      <div
        className={`max-w-[1160px] w-full ${styles.flexCenter} flex-col relative`}
      >
        <h1 className={`${styles.heading2} text-center text-white`}>
          Get your best deal
        </h1>

        <div
          className={`${styles.flexCenter} gap-[24px] mt-[32px] mb-[80px] md:my-[40px]`}
        >
          <p
            className={`${styles.text} text-white opacity-50 ${
              activePrice === 1 ? "active-price" : ""
            }`}
          >
            Monthly
          </p>

          <label className="rounded-[99px] bg-white w-[100px] h-[50px] relative inline-block">
            <input
              type="checkbox"
              className="opacity-0 width-0 height-0"
              onChange={handleChange}
            />

            <div className="absolute top-0 left-0 right-0 bottom-0 slider cursor-pointer"></div>

            <span
              className="font-edu absolute text-white text-center text-sm w-[100px] 
              right-[-80px] sm:right-[-210px] bottom-[-70px] sm:bottom-[30px] price font-bold"
            >
              Save 10% per month
            </span>
          </label>

          <p
            className={`${styles.text} text-grey3 opacity-50 ${
              activePrice === 2 ? "active-price" : ""
            }`}
          >
            Yearly
          </p>
        </div>

        <div className={`w-full ${styles.flexCenter} flex-wrap gap-[25px] md:gap-[40px]`}>
          {price.map((item) => (
            <PriceCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

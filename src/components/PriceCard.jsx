import React from "react";
import styles from "../style";

const PriceCard = ({ item }) => {
  return (
    <div
      className={`rounded-2xl flex flex-col w-[360px] h-[600px] ${
        item.active ? "bg-primary" : "bg-white"
      } relative`}
    >
      <div className="p-[32px]">
        <div>
          <h2 className={`${styles.subHeading} text-black`}>
            {item.packageName}
          </h2>
          <p className={`${styles.priceText} text-black pt-2`}>{item.detail}</p>
        </div>

        <hr className="border-solid border-t-[1px] border-black w-full opacity-[0.2] my-[32px]" />

        <div className="flex items-end">
          <h2 className={`${styles.subHeading}`}>{item.price}</h2>
          <span className="pl-[5px]">/Month</span>
        </div>

        <div className="flex flex-col gap-[20px] mt-[24px] md:mt-[32px]">
          {item.package.map((include, index) => (
            <p key={index}>✓ {include}</p>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[24px] w-full px-[32px]">
        <button
          className={`${
            item.active ? "bg-black text-white" : "bg-primary"
          } rounded-[30px] w-full h-[58px]`}
        >
          Start Tree Trial
        </button>
      </div>
    </div>
  );
};

export default PriceCard;

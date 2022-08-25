import React from "react";
import { socIcon, tweets } from "../constants";
import styles from "../style";

const Platform = () => {
  return (
    <section
      className={`my-[80px] sm:my-[140px] ${styles.flexCenter} flex-col w-full`}
    >
      <div className={`max-w-[1160px] w-full ${styles.flexCenter} flex-col`}>
        <h1 className={`${styles.heading2} text-center`}>
          All platform connect to Findtrend
        </h1>

        <div
          className={`w-full my-[32px] sm:my-[80px] ${styles.flexCenter} flex-wrap gap-[16px] sm:gap-[24px]`}
        >
          {socIcon.map((icon) => (
            <div key={icon.id}
              className={`p-[17px] sm:p-[32px] rounded-lg cursor-pointer ${
                styles.flexCenter
              } ${icon.active ? "bg-primary" : "bg-transparent"}`}
            >
              <img
                src={icon.logo}
                alt={icon.id}
                className="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px]"
              />
            </div>
          ))}
        </div>

        <div
          className={`w-full mb-[32px] sm:mb-[80px] ${styles.flexCenter} flex-col gap-[16px] sm:gap-[40px] rounded-lg`}
        >
          {tweets.map((tweet) => (
            <img src={tweet.logo} alt={tweet.id} className="rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;

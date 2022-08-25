import React from "react";
import { tabs } from "../constants";
import styles from "../style";

const Hero = () => {
  return (
    <section className={`my-[56px] sm:my-[90px] ${styles.flexCenter} flex-col w-full`}>
      <div className={`max-w-[800px] ${styles.flexCenter} flex-col relative w-full`}>
        <h1 className={`${styles.heading} text-white`}>
          Minimize your tabs. <br /> Find the trends!{" "}
        </h1>
        <p className={`${styles.text} xs:w-[320px] sm:w-auto text-grey mt-[16px] sm:mt-[24px]`}>
          Don’t let your computer memories consumes all of those browser tabs.
          <br />
          Findtrend let you gathers all of your favorite website into one place.
        </p>
        <button className="rounded-[40px] bg-primary px-[24px] py-[12px] font-bold text-sm sm:text-base md:text-lg mt-[32px] sm:mt-[50px] relative">
          <a href="#">Get Started 🔥</a>
          <span className="hidden sm:block font-edu absolute text-center text-white text-sm w-[100px] right-[-130px] bottom-[40px] research font-bold">
            All research start from here
          </span>
        </button>
      </div>

      <div
        className={`${styles.flexCenter} flex-col md:flex-row mt-[60px] sm:mt-[100px] relative w-full sm:max-w-[1100px] h-auto md:h-[150px]`}
      >
        {tabs.map((tab) => (
          <img
            src={tab.logo}
            alt={tab.id}
            key={tab.id}
            className={`${tab.id} h-[80px] sm:h-[90px] w-[300px] sm:w-[350px] md:absolute`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

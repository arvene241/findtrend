import React from "react";
import styles from "../style";
import { tab5, arrowBlack } from "../assets";

const Solution = () => {
  return (
    <section className={`h-screen ${styles.flexCenter} flex-col w-full`}>
      <div className={`max-w-[850px] ${styles.flexCenter} flex-col relative w-full`}>
        <h1 className={`${styles.heading} text-black font-bold`}>
          Open new tabs is sh*t
        </h1>
        <div className="bg-grey3 rounded-[14px] sm:rounded-2xl p-6 sm:px-20 sm:py-[60px] relative my-[80px] sm:my-[60px]">
          <img
            src={tab5}
            alt="tab5"
            className="w-[290px] h-[70px] sm:w-[340px] sm:h-[80px]"
          />
          <span
            className="font-edu absolute font-bold text-black text-center text-sm top-[-60px] sm:top-[40px] right-[-20px] 
            sm:right-[-120px] w-[90px] arrow1"
          >
            You just need one tab now
          </span>

          <span className="font-edu absolute font-bold text-black text-center text-sm bottom-[-60px] sm:bottom-[50px] left-[-20px] 
            sm:left-[-120px] sm: w-[90px] arrow2">
            solution for discover a trend
          </span>
        </div>
        <p className={`${styles.text} xs:w-[320px] max-w-[640px] sm:w-auto text-black`}>
          A solution for your browser tabs and don’t make your device get slower
          over time. Get ease and faster to discover a trend with just one tab.
        </p>
      </div>
    </section>
  );
};

export default Solution;

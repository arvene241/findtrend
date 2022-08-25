import React from "react";
import styles from "../style";

const HowItWork = () => {
  return (
    <section
      className={`my-[80px] xs:my-0 xs:h-screen ${styles.flexCenter} flex-col w-full`}
    >
      <div
        className={`max-w-[1160px] w-full ${styles.flexCenter} flex-col relative`}
      >
        <h1 className={`${styles.heading2}`}>
          Findtrend helps you to increase your productivity and reduce your
          computer's memory load,{" "}
          <span className="text-grey2">
            an application that can fulfill your daily browsing needs.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HowItWork;

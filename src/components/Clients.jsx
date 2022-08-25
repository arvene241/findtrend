import React from "react";
import styles from "../style";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section
      className={`my-[80px] sm:my-[140px] ${styles.flexCenter} flex-col w-full`}
    >
      <div className={`max-w-[1160px] w-full ${styles.flexCenter} flex-col`}>
        <h1 className={`${styles.heading2} text-center`}>
          Findtrend make +1000 Startup grow
        </h1>
        <div
          className={`w-full my-[32px] sm:my-[80px] ${styles.flexCenter} flex-wrap gap-[12px] sm:gap-[22px] md:gap-[32px]`}
        >
          {clients.map((client) => (
            <div key={client.id}
              className={`p-[25px] md:p-[40px] w-[162px] h-[75px] sm:w-[265px] sm:h-[150px] bg-grey3 rounded-lg ${styles.flexCenter}`}
            >
              <img src={client.logo} alt={client.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

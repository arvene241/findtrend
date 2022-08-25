import React from "react";
import styles from "../style";

const ContactUs = () => {
  return (
    <section
      className={`my-[80px] sm:my-[140px] ${styles.flexCenter} flex-col w-full`}
    >
      <div className={`max-w-[800px] w-full ${styles.flexCenter} flex-col gap-[32px] sm:gap-[40px]`}>
        <h1
          className={`${styles.heading} text-center text-black`}
        >
          Join us on email for
          <br />
          <span className="text-secondary">more trending topics</span>
        </h1>

        <button className="rounded-[40px] bg-black px-[30px] py-[8px]">
          <a href="#" className="font-poppins text-white">
            Join Now
          </a>
        </button>
      </div>
    </section>
  );
};

export default ContactUs;

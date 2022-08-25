import React from "react";
import Clients from "./components/Clients";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWork from "./components/HowItWork";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Pricing from "./components/Pricing";
import Solution from "./components/Solution";
import styles from "./style";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`bg-hero-mobile sm:bg-hero-pc px-7 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero />
        </div>
      </div>

      <div className={`bg-primary px-7 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Solution />
        </div>
      </div>

      <div className={`bg-white px-7 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HowItWork />
          <Clients />
        </div>
      </div>

      <div className={`bg-grey3 px-7 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Platform />
        </div>
      </div>

      <div className={`bg-black px-7 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Pricing />
        </div>
      </div>
      
      <div className={`bg-primary px-7 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ContactUs />
        </div>
      </div>

      <div className={`bg-white px-7 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { logoDark } from "../assets";
import { footerLinks } from "../constants";
import styles from "../style";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <footer className="py-[80px] md:py-6 flex flex-col md:flex-row justify-between items-center w-full">
      <img src={logoDark} alt="findtrend" className="cursor-pointer mb-[80px] md:mb-0" />
      <NavLink mobile={false} links={footerLinks} color="black" style={styles.footerLink} />
    </footer>
  );
};

export default Footer;

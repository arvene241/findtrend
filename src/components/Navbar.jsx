import React, { useState, useEffect } from "react";
import logo from "../assets/Logo color.png";
import logo2 from "../assets/Fav-256px.png";
import { menu, close } from "../assets";
import useBreakpoints from "../hooks/useBreakpoints";
import styles from "../style";
import NavLink from "./NavLink";
import { navLinks } from "../constants";

const Navbar = () => {
  const { isLaptop } = useBreakpoints();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }

  }, [toggle])

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <div className={`bg-black opacity-50 absolute w-full h-full top-0 left-0 z-10 ${toggle ? 'block' : 'hidden'}`}></div>
      {isLaptop ? (
        <img
          src={logo2}
          alt="findtrend"
          className="w-[40px] h-[40px] z-[100] cursor-pointer"
        />
      ) : (
        <img src={logo} alt="findtrend" className="z-[100] cursor-pointer" />
      )}

      <NavLink mobile={false} links={navLinks} color="white" style={styles.navbar} />

      <div className={`md:${styles.flexCenter} hidden gap-10`}>
        <a href="#" className="font-poppins text-white">
          Login
        </a>

        <button className="rounded-[40px] bg-white px-[30px] py-[8px]">
          <a href="#" className="font-poppins text-black">
            Register
          </a>
        </button>
      </div>

      <div className={`${styles.flexCenter} md:hidden`}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[25px] h-[25px] cursor-pointer z-[100]"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            toggle ? "open" : ""
          } p-6 bg-black absolute top-0 left-0 w-full h-[638px] sidebar z-[50]`}
        >
          <NavLink mobile={true} links={navLinks} color="white" style={styles.menuNavbar}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

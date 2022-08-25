import React from "react";
import styles from "../style";

const NavLink = ({ mobile, links, color, style }) => {

  return (
    <ul className={`${style} ${mobile ? `${styles.flexCenter} flex-col pt-[160px]` : ''}`}>
      {links && links.map((nav) => (
        <li
          key={nav.id}
          className={`font-poppins font-normal text-base text-${color}`}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}

      {mobile && (
        <>
          <a href="#" className="font-poppins text-white">
            Login
          </a>
          <button className="rounded-[40px] bg-white px-[30px] py-[8px]">
            <a href="#" className="font-poppins text-black">
              Register
            </a>
          </button>
        </>
      )}
    </ul>
  );
};

export default NavLink;

import React from "react";
import "./Navigation.css";
import { TiHome } from "react-icons/ti";
import { SiGooglescholar } from "react-icons/si";
import { HiOutlineUser, HiOutlineMailOpen } from "react-icons/hi";
const Navigation = () => {
  return (
    <div className="nav__container">
      <div className="nav__container__logo">
          F.
      </div>
      <div className="nav__container__icons">
        <TiHome className="nav__container__icons--img" color="white" />
        <SiGooglescholar className="nav__container__icons--img" color="white" />
        <HiOutlineUser className="nav__container__icons--img" color="white" />
        <HiOutlineMailOpen
          className="nav__container__icons--img"
          color="white"
        />
        {/* <IoSettingsOutline className="nav__container__icons" color="white" /> */}
      </div>
      <div className="nav__container__logout">LOG</div>
    </div>
  );
};

export default Navigation;

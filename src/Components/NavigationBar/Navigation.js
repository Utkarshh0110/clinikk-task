import React from "react";
import "./Navigation.css";
import {
  HiOutlineUser,
  HiOutlineMailOpen,
  HiOutlineLogout,
  VscMortarBoard,
  IoSettingsOutline,
  TiHome
} from "react-icons/all";
const Navigation = () => {
  return (
    <div className="nav__container">
      <div className="nav__container__logo">F.</div>
      <div className="nav__container__icons">
        <TiHome className="nav__container__icons--img"/>
        <VscMortarBoard className="nav__container__icons--img" />
        <HiOutlineUser className="nav__container__icons--img" />
        <HiOutlineMailOpen className="nav__container__icons--img" />
        <IoSettingsOutline className="nav__container__icons--img" />
      </div>
      <div className="nav__container__logout">
        <HiOutlineLogout className="nav__container__logout--img" />
      </div>
    </div>
  );
};

export default Navigation;

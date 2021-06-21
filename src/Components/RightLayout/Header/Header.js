import React from "react";
import "./Header.css";
import { BiSearch } from "react-icons/bi";
import {IoNotificationsOutline, MdKeyboardArrowDown} from 'react-icons/all'
const Header = () => {
  return (
    <div className="rightheader__container">
      <div className="rightheader__input">
        <BiSearch className="rightheader__input--icon" />
        <input className="" type="text" />
      </div>
      <div className="rightheader__logo">
        <IoNotificationsOutline size="3rem"/>
        <img className="rightheader__logo--img" src="https://i.pinimg.com/originals/21/c3/7f/21c37f5445a5296530e3ca91cdd5f42c.jpg" alt="" />
        <MdKeyboardArrowDown  size="2rem"/>
      </div>
    </div>
  );
};

export default Header;

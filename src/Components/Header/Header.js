import React from "react";
import "./Header.css";
import usericon from "../../assets/images/usericon.svg";
const Header = () => {
  return (
    <div className="header__container">
      <span className="header__container--span">
        Hello Josh!
        <span className="header__container--text">It’s good to see you again.</span>
      </span>
      <img className="header__container--image" src={usericon} alt="User" />
    </div>
  );
};

export default Header;

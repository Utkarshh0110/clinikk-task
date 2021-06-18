import React from "react";
import "./Advertisement.css";
import image from "../../../assets/images/premium.svg";
import Button from "../../Button/Button";
const Advertisement = () => {
  return (
    <div className="advertisement__container">
      <div className="advertisement__container--description">
        <h2>Lern even more!</h2>
        <h3>Unlock premium features only for $9.99 per month.</h3>
        <Button name="Go premium" />
      </div>
      <div className="advertisement__container--image">
        <img className="aimage" src={image} alt="" />
      </div>
    </div>
  );
};

export default Advertisement;

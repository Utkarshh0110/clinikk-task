import React from "react";
import "./CourseDetails.css";
import Button from "../Button/Button";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
const CourseDetails = () => {
  return (
    <div className="coursedetails__container">
      <div className="coursedetails__container--details">
        <div className="coursedetails__container--flag"></div>
        <div className="coursedetails__container--userdetails">
          <span>Spanish B2</span>
          <h5>by Alejandro Velazquez</h5>
        </div>
        <div>WOdsdcsdR</div>
        <div className="coursedetails__container--btn">
          <Button name="Continue" />
        </div>
      </div>
      <button className="coursedetails__container--button">
        <HiOutlineArrowNarrowLeft size="2rem" />
      </button>
      <button className="coursedetails__container--button">
        <HiOutlineArrowNarrowRight size="2rem" />
      </button>
    </div>
  );
};

export default CourseDetails;

import React from "react";
import "./CourseList.css";
import "../CourseDetails/CourseDetails.css";
import { MdWatchLater } from "react-icons/md";
import { HiFire } from "react-icons/hi";
import IMAGES from '../../../assets'
import Button from "../../Button/Button";
const CourseList = ({name, author, image,course}) => {
  return (
    <div className="courselist__container">
      <div className="coursedetails__container--flag">
          <div className="coursedetails__imagecontainer">
          <img className="coursedetails__image" src={IMAGES[image]} alt="TEST" />
          </div>
      </div>
      <div className="coursedetails__container--userdetails">
        <span>{name}</span>
        <h5>by {author}</h5>
      </div>
      <div className="coursedetails__container--watchtime">
        <MdWatchLater className="coursedetails__container--icon" />
        <span>{course.watchtime}</span>
      </div>
      <div className="coursedetails__container--upvotes">
        <HiFire size="2rem" />
        <span>{course.upvotes}</span>
      </div>
      <div className="coursedetails__container--viewcourse">
        <Button name="View course" bgcolor="none" />
      </div>
    </div>
  );
};

export default CourseList;

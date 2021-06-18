import React from "react";
import "./CourseCount.css";
const CourseCount = () => {
  return (
    <div className="coursecount__container">
      <div className="coursecount__container--completed">
        <h1>11</h1>
        <span>Courses completed</span>
      </div>
      <div className="coursecount__container--progress">
        <h1>4</h1>
        <span>Courses in progress</span>
      </div>
    </div>
  );
};

export default CourseCount;

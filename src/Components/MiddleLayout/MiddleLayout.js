import React from "react";
import Header from "../Header/Header";
import CourseDetails from "../CourseDetails/CourseDetails";
import "./MiddleLayout.css";
import CourseList from "../CourseList/CourseList";
import jsondata from "../../MOCK_DATA.json";
const MiddleLayout = () => {
  return (
    <div className="middle__container">
      <Header />
      <CourseDetails />
      {jsondata.map((course) => {
        return <CourseList key={course.id} name={course.name} author={course.author} image={course.image}/>;
      })}
    </div>
  );
};

export default MiddleLayout;

import React from "react";
import Header from "./Header/Header";
import CourseDetails from "./CourseDetails/CourseDetails";
import "./MiddleLayout.css";
import CourseList from "./CourseList/CourseList";
import jsondata from "../../MOCK_DATA.json";
const MiddleLayout = () => {
  return (
    <div className="middle__container">
      <Header />
      <CourseDetails />
      <div className="middle__container--course">
        <h1>Courses</h1>
      </div>
      <div className="middle__container--type">
        <h1 style={{color:"black"}}>All Courses</h1>
        <h1>The Newest</h1>
        <h1>Top Rated</h1>
        <h1>Most Popular</h1>
      </div>
      {jsondata.map((course) => {
        return <CourseList key={course.id} name={course.name} author={course.author} image={course.image} course={course}/>;
      })}
    </div>
  );
};

export default MiddleLayout;

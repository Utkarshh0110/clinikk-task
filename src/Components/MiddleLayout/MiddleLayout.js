import React from 'react'
import Header from "../Header/Header";
import CourseDetails from "../CourseDetails/CourseDetails";
import './MiddleLayout.css'
const MiddleLayout = () => {
    return (
        <div className="middle__container">
            <Header/>
            <CourseDetails />
        </div>
    )
}

export default MiddleLayout

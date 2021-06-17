import React from 'react'
import './CourseDetails.css'
import Button from '../Button/Button'
const CourseDetails = () => {
    return (
        <div className="coursedetails__container">
            <div className="coursedetails__container--details">
                <div className="coursedetails__container--flag">

                </div>
                <div className="coursedetails__container--userdetails">
                    <span>Spanish B2</span>
                    <h5>by Alejandro Velazquez</h5>
                </div>
                <div>WOR</div>
                <div className="coursedetails__container--button">
                    <Button name="Continue"/>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails

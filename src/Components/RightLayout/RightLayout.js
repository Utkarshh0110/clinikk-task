import React from 'react'
import CourseCount from './TotalCourse/CourseCount'
import Advertisement from './Ads/Advertisement'
import Header from './Header/Header'
import LineChart from './LineChart/LineChart'
const RightLayout = () => {
    return (
        <div>
            <Header/>
            <CourseCount/>
            <LineChart/>
            <Advertisement/>
        </div>
    )
}

export default RightLayout

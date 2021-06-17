import React from 'react'
import './Button.css'
const Button = ({name}) => {
    return (
        <button className="btn">
            {name}
        </button>
    )
}

export default Button

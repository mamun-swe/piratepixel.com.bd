import React from 'react'
import './style.scss'

export const CustomButton = (props) => {
    return (
        <button
            type={props.type}
            style={props.style}
            disabled={props.disabled}
            className={`btn ${props.className} shadow-none`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

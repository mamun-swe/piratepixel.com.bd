import React from 'react'
import './style.scss'

export const Loader = (props) => {
    const response = props.signal
    return (
        <div className="data-loader-container">
            {response ? (
                <div className="flex-center flex-column" style={{paddingRight: "320px"}}>
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="flex-center flex-column">
                    <div className="loader"></div>
                </div>
            )}
            
        </div>
    );
};

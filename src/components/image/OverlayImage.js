import React from 'react';

export const OverlayImage = (props) => {
    return (
        <div className="overlay-image-container">
            <img src={props.src} className="img-fluid" alt="..." />

            {props.message ?
                <div className="overlay">
                    <div className="flex-center flex-column">
                        <h6 className="mb-0 text-white fw-bolder">{props.message}</h6>
                    </div>
                </div>
                : null
            }
        </div>
    );
};
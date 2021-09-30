
import React from 'react';
import './style.scss'
import { CircleImage } from '../image/Image'

export const ProfileBanner = (props) => {
    return (
        <div className="profile-banner-container" style={{ backgroundImage: `url(${props.backgroundSrc})` }}>
            <div className="banner-overlay">
                <div className="flex-center flex-column text-center">
                    <CircleImage
                        width={130}
                        height={130}
                        src={props.profileSrc}
                    />
                    <h3 className="text-capitalize text-white mt-4 mb-0">{props.name}</h3>
                </div>
            </div>
        </div>
    );
};

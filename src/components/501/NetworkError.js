import React from 'react'
import { Images } from '../../utils/Images'

export const NetworkError = (props) => {
    return (
        <div className="text-center w-100">
            <img
                src={Images.NetworkError}
                alt="Network error"
                width={300}
                height={230}
            />
            <p className="text-muted font-17 mt-4">{props.message}</p>
        </div>
    );
};

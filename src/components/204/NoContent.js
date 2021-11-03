import React from 'react'
import { Images } from '../../utils/Images'

export const NoContent = (props) => {
    return (
        <div className="text-center w-100">
            <img
                src={Images.NoContent}
                alt="Network error"
                width={400}
                height={330}
            />
            <p className="text-muted font-17 mt-4">{props.message}</p>
        </div>
    );
};

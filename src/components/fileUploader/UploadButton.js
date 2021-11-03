import React from 'react';
import './style.scss';

export const UploadButton = (props) => {
    return (
        <div className={"custom-upload-button-container " + props.className}>
            <input
                type="file"
                accept=".jpg, .png, .jpeg"
                className="upload"
                disabled={props.disabled}
                multiple={props.multi}
                onChange={props.onChange}
            />
            {props.children}
        </div>
    );
};
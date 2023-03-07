import React from "react";
import "./style.css";

export const CircleImage = (props) => {
  return (
    <div
      className="circle-image-container"
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <img src={props.src} className="img-fluid" alt="..." />
    </div>
  );
};

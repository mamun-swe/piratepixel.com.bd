import React from "react";
import "./style.css";
import { UploadButton } from "./UploadButton";

export const FileUploader = (props) => {
  return (
    <div className="multi-file-uploader-container text-center px-30 py-30">
      <p className="text-dark font-14 fw-bolder mb-2">
        Select your files & and upload to media. It's easy to upload.
      </p>
      <p className="text-muted font-14 mb-4">
        Unlimited uploads remaining this month.
      </p>
      <UploadButton
        className="m-auto"
        multi={props.multi}
        onChange={(event) => props.onSelected(event.target.files)}
      >
        Select files
      </UploadButton>
    </div>
  );
};

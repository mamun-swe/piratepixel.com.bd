import React from 'react';
import './style.scss';
import fileSize from 'file-size';
import { X } from 'react-feather';
import { Card } from '../card/Index';
import { CustomButton } from '../button/Index'


export const UploadProgressCard = (props) => {
    return (
        <Card.Simple className="upload-progress-container rounded border-0 mb-3">
            <Card.Body className="p-3">
                <div className="d-flex">
                    <div className="file-container">
                        <img src={URL.createObjectURL(props.data)} className="img-fluid" alt={props.data.name} />
                    </div>
                    <div className="content-container flex-grow-1 ps-3">
                        <p className="font-14 fw-bolder mb-1">{props.data.name}</p>
                        <p className="font-14 text-muted mb-0">Size {fileSize(props.data.size).human('si')}</p>
                        <p className="font-14 text-muted mb-0">Uploading...</p>
                    </div>
                    <div className="ms-auto">
                        <CustomButton
                            className="btn-danger rounded-circle border-0"
                            style={{ padding: "2px 5px" }}
                            disabled={props.disabled}
                            onClick={props.onClick}
                        ><X size={18} /></CustomButton>
                    </div>
                </div>
            </Card.Body>
        </Card.Simple>
    );
};

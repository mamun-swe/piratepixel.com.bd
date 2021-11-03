import React, { useState } from 'react';
import { Container } from '../../../components/container/Index'
import { FileUploader } from '../../../components/fileUploader/FileUploader'
import { UploadProgressCard } from '../../../components/uploadProgressCard/UploadProgressCard'

const Index = () => {
    const [selectedFiles, setSelectedFiles] = useState([])
    const tags = ["abcd", "acdb", "abdc", "xyz"]

    // Handle files
    const handleFiles = data => {
        const filesArray = []
        for (let i = 0; i < data.length; i++) {
            filesArray.push(data[i])
        }
        setSelectedFiles(filesArray)
    }

    return (
        <div className="file-uploader-container">
            <Container.Fluid>

                {/* Uploader container */}
                {selectedFiles && !selectedFiles.length ?
                    <Container.Row className="py-30">
                        <Container.Column className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 m-auto">
                            <FileUploader
                                multi={false}
                                onSelected={files => handleFiles(files)}
                            />
                        </Container.Column>
                    </Container.Row>
                    : null
                }

                {/* Upload progress container */}
                {selectedFiles && selectedFiles.length ?
                    <Container.Row className="py-30">
                        <Container.Column className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 m-auto">

                            {selectedFiles && selectedFiles.map((item, i) =>
                                <UploadProgressCard
                                    key={i}
                                    data={item}
                                    tags={tags}
                                    categories={[{ label: "abcd", value: "abcd" }]}
                                />
                            )}

                        </Container.Column>
                    </Container.Row>
                    : null
                }
            </Container.Fluid>
        </div>
    );
};

export default Index;
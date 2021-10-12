import React, { useState } from 'react';
import { Container } from '../../../components/container/Index'
import { MultiFileUploader } from '../../../components/fileUploader/MultiFileUploader'
import { UploadProgressCard } from '../../../components/uploadProgressCard/UploadProgressCard'

const Index = () => {
    const [selectedFiles, setSelectedFiles] = useState([])

    // Handle files
    const handleFiles = data => {
        const filesArray = []
        for (let i = 0; i < data.length; i++) {
            filesArray.push(data[i])
        }
        setSelectedFiles(filesArray)
    }

    // Handle remove file
    const handleRemove = data => {
        const withOutThisFile = selectedFiles.filter(x => x.name !== data.name)
        const newFiles = [...withOutThisFile]
        setSelectedFiles(newFiles)
    }

    return (
        <div className="file-uploader-container">
            <Container.Fluid>

                {/* Uploader container */}
                {selectedFiles && !selectedFiles.length ?
                    <Container.Row className="py-30">
                        <Container.Column className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 m-auto">
                            <MultiFileUploader
                                multi={true}
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
                                    onClick={() => handleRemove(item)}
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
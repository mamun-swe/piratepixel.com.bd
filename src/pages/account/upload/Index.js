import React from 'react';
import { Container } from '../../../components/container/Index'
import { MultiFileUploader } from '../../../components/fileUploader/MultiFileUploader'

const Index = () => {
    return (
        <div className="file-uploader-container">
            <Container.Fluid>

                {/* Uploader container */}
                <Container.Row className="py-30">
                    <Container.Column className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 m-auto">
                        <MultiFileUploader />
                    </Container.Column>
                </Container.Row>

                {/* Upload progress container */}
                {/* <Container.Row className="py-30">
                    <Container.Column className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 m-auto">

                    </Container.Column>
                </Container.Row> */}
            </Container.Fluid>
        </div>
    );
};

export default Index;
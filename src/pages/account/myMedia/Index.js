import React from 'react';
// import Gallery from 'react-photo-gallery';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../../components/button/Index';
import { Container } from '../../../components/container/Index';
// import { photos } from '../../../utils/Photos'

const Index = () => {
    return (
        <div>
            <Container.Fluid>
                <Container.Row>

                    {/* If media not available */}
                    <Container.Column className="text-center py-30">
                        <h4 className="text-dark mb-2">Wow, that's a very clean portfolio!</h4>
                        <p className="font-14 text-muted mb-4">Upload your favourite images on PiratePixel.</p>
                        <Link to="/account/upload">
                            <CustomButton
                                className="font-15 btn-success border-0"
                                style={{ padding: "10px 30px", borderRadius: 25 }}
                            >Upload images</CustomButton>
                        </Link>
                    </Container.Column>

                    {/* Uploaded media */}
                    {/* <Container.Column className="py-20">
                        <Gallery photos={photos} />
                    </Container.Column> */}
                </Container.Row>
            </Container.Fluid>
        </div>
    );
};

export default Index;
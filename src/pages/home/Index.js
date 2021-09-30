
import React from 'react';
import Gallery from 'react-photo-gallery';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Banner } from '../../components/banner/Index';
import { Container } from '../../components/container/Index';
import { photos } from '../../utils/Photos'

const Index = () => {

    const openLightbox = ((event, { photo, index }) => {
        console.log(photo);
        console.log(index);
    });

    return (
        <div>
            <NavbarGeneral />
            <Banner />

            <Container.Fluid className="py-4">
                <Container.Row>
                    <Container.Column>
                        <Gallery
                            photos={photos}
                            onClick={openLightbox}
                        />
                    </Container.Column>
                </Container.Row>
            </Container.Fluid>
        </div>
    );
};

export default Index;
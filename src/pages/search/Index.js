
import React from 'react';
import CommaNumber from 'comma-number';
import Gallery from 'react-photo-gallery';
import { useHistory } from 'react-router';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Container } from '../../components/container/Index';
import { Footer } from '../../components/footer/Index';
import { CustomButton } from '../../components/button/Index';
import { useQuery } from '../../components/query/Index';

import { photos } from '../../utils/Photos'


const Index = () => {
    const history = useHistory()
    const { query } = useQuery()

    const handleImage = ((event, { photo, index }) => {
        history.push(`/photo/${photo.slug}`)
    })

    return (
        <div>
            <NavbarGeneral searchable />
            <Container.Fluid className="py-4">
                <Container.Row>
                    <Container.Column>
                        <p className="font-16 text-dark mb-0">Search for <span className="text-muted">{query}</span></p>
                        <p className="font-14 text-muted mb-1">{CommaNumber(120000)} Results found.</p>
                        <Gallery
                            photos={photos}
                            onClick={handleImage}
                        />
                    </Container.Column>

                    {/* Paginate button */}
                    <Container.Column className="text-center pt-5 pb-4">
                        <CustomButton
                            style={{ borderRadius: 25, padding: "10px 25px", fontSize: 14 }}
                            className="btn-gray border-0 me-2">
                            <ChevronLeft size={15} /> Prev Page
                        </CustomButton>
                        <CustomButton
                            style={{ borderRadius: 25, padding: "10px 25px", fontSize: 14 }}
                            className="btn-gray border-0">
                            Next Page <ChevronRight size={15} />
                        </CustomButton>
                    </Container.Column>
                </Container.Row>
            </Container.Fluid>

            <Footer />
        </div>
    );
};

export default Index;
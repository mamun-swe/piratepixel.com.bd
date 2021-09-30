
import React from 'react';
import CommaNumber from 'comma-number';
import Gallery from 'react-photo-gallery';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Container } from '../../components/container/Index';
import { Footer } from '../../components/footer/Index';
import { CustomButton } from '../../components/button/Index'
import { ProfileBanner } from '../../components/profileBanner/ProfileBanner'

import { Images } from '../../utils/Images'
import { photos } from '../../utils/Photos'

const Show = () => {
    const { id } = useParams()
    const history = useHistory()

    const handleImage = ((event, { photo, index }) => {
        history.push(`/photo/${photo.slug}`)
    })

    console.log(id)

    return (
        <div>
            <NavbarGeneral searchable />

            <ProfileBanner
                profileSrc={Images.User}
                backgroundSrc={Images.BannerXl}
                name={"abdullah al mamun"}
            />

            <Container.Fluid className="py-4">
                <Container.Row>

                    {/* Image gallery */}
                    <Container.Column>
                        <p className="font-14 text-muted mb-1">{CommaNumber(120000)} Photos avaiable</p>
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

export default Show;
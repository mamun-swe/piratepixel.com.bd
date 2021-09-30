
import React, { useCallback, useEffect, useState } from 'react';
import CommaNumber from 'comma-number';
import { Link, useParams } from 'react-router-dom';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Container } from '../../components/container/Index';
import { Card } from '../../components/card/Index'
import { Footer } from '../../components/footer/Index';
import { CircleImage } from '../../components/image/Image'
import { CustomButton } from '../../components/button/Index'
import { Images } from '../../utils/Images'

import { photos } from '../../utils/Photos'

const Show = () => {
    const { slug } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    // fetch data
    const fetchData = useCallback(async () => {
        try {
            const response = await photos.find(x => x.slug === slug)
            setData(response)

            setTimeout(() => {
                setLoading(false)
            }, 1000)
        } catch (error) {
            if (error) console.log(error)
        }
    }, [slug])

    useEffect(() => {
        fetchData()
    }, [slug, fetchData])

    return (
        <div>
            <NavbarGeneral searchable />

            <Container.Basic className="pt-4 pb-5">
                <Container.Row>

                    {/* Photo container */}
                    <Container.Column className="col-lg-8 col-xxl-9 text-center mb-4 mb-lg-0">
                        {loading ?
                            <div className="bg-white" style={{ minHeight: 500 }} /> :
                            <img src={data.src} className="img-fluid" alt={data.slug} />
                        }
                    </Container.Column>

                    {/* Uploader profile container */}
                    <Container.Column className="col-lg-4 col-xxl-3">
                        <Card.Simple className="border-0 bg-white rounded-0">
                            <Card.Body className="p-3">
                                <div className="d-flex">
                                    <div>
                                        <CircleImage
                                            width={50}
                                            height={50}
                                            src={Images.User}
                                        />
                                    </div>
                                    <div className="ps-2 pt-1">
                                        <h6 className="text-capitalize mb-1">
                                            <Link
                                                to={`/users/mamun-1234`}
                                                className="text-dark text-decoration-none"
                                            >abdullah al mamun</Link>
                                        </h6>
                                        <p className="text-muted font-13 mb-2">{CommaNumber(1200)} images</p>

                                        <Link to={`/users/mamun-1234`}>
                                            <CustomButton
                                                className="btn-gray font-13"
                                                style={{ borderRadius: 25, padding: "4px 13px" }}
                                            >View Profile</CustomButton>
                                        </Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card.Simple>
                    </Container.Column>
                </Container.Row>
            </Container.Basic>

            <Footer />
        </div>
    );
};

export default Show;
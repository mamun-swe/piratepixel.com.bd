
import React, { useCallback, useEffect, useState } from 'react';
import CommaNumber from 'comma-number';
import { Link, useParams } from 'react-router-dom';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Container } from '../../components/container/Index';
import { Card } from '../../components/card/Index'
import { Footer } from '../../components/footer/Index';
import { CircleImage } from '../../components/image/Image'
import { CustomButton } from '../../components/button/Index'
import { Loader } from '../../components/loader/Index'
import { NoContent } from '../../components/204/NoContent'
import { NetworkError } from '../../components/501/NetworkError'
import { Images } from '../../utils/Images'
import { Requests } from '../../utils/requests/Index'

const Show = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [serverError, setServerError] = useState(false)

    // fetch data
    const fetchData = useCallback(async () => {
        try {
            const response = await Requests.Web.PhotoShow(id)
            if (response && response.status === 200) {
                setData(response.data.data)
            }
            setLoading(false)
        } catch (error) {
            if (error) {
                setLoading(false)
                setServerError(true)
            }
        }
    }, [id])

    useEffect(() => {
        fetchData()
    }, [id, fetchData])

    return (
        <div>
            <NavbarGeneral searchable />

            {loading && !Object.keys(data).length && !serverError ? <Loader /> : null}
            {!loading && !Object.keys(data).length && !serverError ?
                <div className="my-5">
                    <NoContent message="No content avaiable." />
                </div>
                : null
            }
            {!loading && !Object.keys(data).length && serverError ?
                <div className="my-5">
                    <NetworkError message="Network error." />
                </div>
                : null
            }

            {!loading && !serverError && Object.keys(data).length ?
                <Container.Basic className="pt-4 pb-5">
                    <Container.Row>

                        {/* Photo container */}
                        <Container.Column className="col-lg-8 col-xxl-9 text-center mb-4 mb-lg-0">
                            {/* <div className="bg-white" style={{ height: 500 }} /> : */}
                            <img src={data.image} className="img-fluid" alt="..." />
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
                                                src={data.uploadedBy && data.uploadedBy.image ? data.uploadedBy.image : Images.Avatar}
                                            />
                                        </div>
                                        <div className="ps-2 pt-1">
                                            <h6 className="text-capitalize mb-1">
                                                <Link
                                                    to={`/users/${data.uploadedBy._id}`}
                                                    className="text-dark text-decoration-none"
                                                >{data.uploadedBy && data.uploadedBy.name ? data.uploadedBy.name : "Not available"}</Link>
                                            </h6>
                                            <p className="text-muted font-13 mb-2">
                                                {CommaNumber(data.uploadedBy && data.uploadedBy.total ? data.uploadedBy.total : 0)} images
                                            </p>

                                            <Link to={`/users/${data.uploadedBy._id}`}>
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
                : null
            }

            <Footer />
        </div>
    );
};

export default Show;
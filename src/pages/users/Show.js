
import React, { useState, useCallback, useEffect } from 'react';
import CommaNumber from 'comma-number';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
// import { ChevronLeft, ChevronRight } from 'react-feather';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Container } from '../../components/container/Index';
import { Footer } from '../../components/footer/Index';
// import { CustomButton } from '../../components/button/Index';
import { ProfileBanner } from '../../components/profileBanner/ProfileBanner';
import { Loader } from '../../components/loader/Index';
import { NoContent } from '../../components/204/NoContent';
import { NetworkError } from '../../components/501/NetworkError';
import { Requests } from '../../utils/requests/Index';
import { Images } from '../../utils/Images'

const Show = () => {
    const { id } = useParams()
    const history = useHistory()
    const [data, setData] = useState({})
    const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(true)
    const [serverError, setServerError] = useState(false)

    // fetch data
    const fetchData = useCallback(async () => {
        try {
            const response = await Requests.Web.UserShow(id)
            if (response && response.status === 200 && response.data.data) {
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

    // fetch images
    const fetchImages = useCallback(async () => {
        try {
            const response = await Requests.Web.UserUploads(id)
            if (response && response.status === 200) {
                setFiles(response.data.data)
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

    useEffect(() => {
        fetchImages()
    }, [fetchImages])

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
                <ProfileBanner
                    profileSrc={data.image || Images.Avatar}
                    backgroundSrc={Images.BannerXl}
                    name={data.name || "Not available"}
                />
                : null
            }

            {!loading && !serverError && Object.keys(data).length ?
                <Container.Fluid className="py-4">
                    <Container.Row>

                        {/* Image gallery */}
                        {files.length ?
                            <Container.Column>
                                <p className="font-14 text-muted mb-1">{CommaNumber(files.length)} Photos avaiable</p>
                            </Container.Column>
                            : null
                        }

                        {files && files.length ?
                            files.map((item, i) =>
                                <Container.Column
                                    className="col-sm-6 col-md-4 col-lg-3 p-1"
                                    key={i}
                                >
                                    <img
                                        src={item.image}
                                        className="img-fluid"
                                        alt="..."
                                        style={{ cursor: "pointer" }}
                                        onClick={() => history.push(`/photo/${item._id}`)}
                                    />
                                </Container.Column>
                            )
                            :
                            <Container.Column className="text-center">
                                <p className="font-16">Not images availabe.</p>
                            </Container.Column>
                        }

                        {/* Paginate button */}
                        {/* <Container.Column className="text-center pt-5 pb-4">
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
                    </Container.Column> */}
                    </Container.Row>
                </Container.Fluid>
                : null
            }


            <Footer />
        </div>
    );
};

export default Show;
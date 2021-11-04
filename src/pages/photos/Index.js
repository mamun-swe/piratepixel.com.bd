
import React, { useCallback, useEffect, useState } from 'react';
import CommaNumber from 'comma-number';
import { useHistory } from 'react-router';
// import { ChevronLeft, ChevronRight } from 'react-feather';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Container } from '../../components/container/Index';
import { Footer } from '../../components/footer/Index';
import { CustomButton } from '../../components/button/Index';
import { Loader } from '../../components/loader/Index'
import { NoContent } from '../../components/204/NoContent'
import { NetworkError } from '../../components/501/NetworkError'
import { Requests } from '../../utils/requests/Index'

const Index = () => {
    const history = useHistory()
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [moreLoading, setMoreLoading] = useState(false)
    const [serverError, setServerError] = useState(false)

    // fetch data
    const fetchData = useCallback(async (page) => {
        try {
            const response = await Requests.Web.Photos(page)
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
    }, [])

    useEffect(() => {
        fetchData(1)
    }, [fetchData])


    // Load more
    const loadMore = async () => {
        try {
            setMoreLoading(true)
            const response = await Requests.Web.Photos(page + 1)
            if (response && response.status === 200) {
                setData([...data, ...response.data.data])
                setPage(page + 1)
            }
            setMoreLoading(false)
        } catch (error) {
            if (error) setMoreLoading(false)
        }
    }


    // handle show image
    const handleImage = (id) => history.push(`/photo/${id}`)

    return (
        <div>
            <NavbarGeneral searchable />

            {loading && !serverError && !data.length ? <Loader /> : null}
            {!loading && !data.length && !serverError ?
                <div className="my-5">
                    <NoContent message="No content avaiable." />
                </div>
                : null
            }
            {!loading && !data.length && serverError ?
                <div className="my-5">
                    <NetworkError message="Network error." />
                </div>
                : null
            }

            {!loading && !serverError && data.length ?
                <Container.Fluid className="py-4">
                    <Container.Row>
                        <Container.Column>
                            <p className="font-14 text-muted mb-1">{CommaNumber(data.length)} Photos avaiable</p>
                        </Container.Column>

                        {data.map((item, i) =>
                            <Container.Column className="col-sm-6 col-md-4 col-lg-3 p-1" key={i}>
                                <img
                                    src={item.image}
                                    className="img-fluid"
                                    alt="..."
                                    onClick={() => handleImage(item._id)}
                                    style={{ cursor: "pointer" }}
                                />
                            </Container.Column>
                        )}

                        {/* Paginate button */}
                        <Container.Column className="text-center pt-5 pb-4">
                            <CustomButton
                                style={{ borderRadius: 25, padding: "10px 25px", fontSize: 14 }}
                                className="btn-gray border-0 me-2"
                                disabled={moreLoading}
                                onClick={loadMore}
                            >
                                {moreLoading ? "Loading..." : "Load More"}
                            </CustomButton>
                        </Container.Column>
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

export default Index;
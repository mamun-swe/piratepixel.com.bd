
import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
// import { ChevronLeft, ChevronRight } from 'react-feather';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Container } from '../../components/container/Index';
import { Footer } from '../../components/footer/Index';
import { Loader } from '../../components/loader/Index';
import { NoContent } from '../../components/204/NoContent';
import { NetworkError } from '../../components/501/NetworkError';
import { Requests } from '../../utils/requests/Index';


const Index = () => {
    const history = useHistory()
    const { id } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [serverError, setServerError] = useState(false)

    // fetch data
    const fetchData = useCallback(async () => {
        try {
            const response = await Requests.Web.CategoryShow(id)
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

            {loading && !serverError && !Object.keys(data).length ? <Loader /> : null}
            {!loading && !serverError && !Object.keys(data).length ?
                <div className="my-5">
                    <NoContent message="No content." />
                </div>
                : null
            }
            {!loading && serverError && !Object.keys(data).length ?
                <div className="my-5">
                    <NetworkError message="Network error." />
                </div>
                : null
            }


            {!loading && !serverError && Object.keys(data).length ?
                <Container.Fluid className="py-4">
                    <Container.Row>
                        <Container.Column>
                            <p className="font-14 text-muted mb-1">Category / {data.name || null}</p>
                        </Container.Column>
                    </Container.Row>

                    <Container.Row className="text-center pt-0 pb-4">
                        {data.images && data.images.length ?
                            data.images.map((item, i) =>
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
                            : null
                        }
                    </Container.Row>
                </Container.Fluid>
                : null
            }

            <Footer />
        </div>
    );
};

export default Index;
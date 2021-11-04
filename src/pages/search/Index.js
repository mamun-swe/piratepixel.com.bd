
import React, { useState, useCallback, useEffect } from 'react';
import CommaNumber from 'comma-number';
import { useHistory } from 'react-router';
// import { ChevronLeft, ChevronRight } from 'react-feather';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Container } from '../../components/container/Index';
import { Footer } from '../../components/footer/Index';
// import { CustomButton } from '../../components/button/Index';
import { useQuery } from '../../components/query/Index';
import { Requests } from '../../utils/requests/Index';


const Index = () => {
    const history = useHistory()
    const { query } = useQuery()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    // fetch data
    const fetchData = useCallback(async () => {
        try {
            const response = await Requests.Web.Search(query)
            if (response && response.status === 200) {
                setData(response.data.data)
            }
            setLoading(false)
        } catch (error) {
            if (error) {
                setLoading(false)
            }
        }
    }, [query])

    useEffect(() => {
        fetchData()
    }, [query, fetchData])

    return (
        <div>
            <NavbarGeneral searchable />
            <Container.Fluid className="py-4">
                <Container.Row>
                    <Container.Column>
                        <p className="font-16 text-dark mb-0">Search for <span className="text-muted">{query}</span></p>
                        {loading && !data.length ? <p className="font-14 text-muted mb-1">Searching...</p> : null}
                        {!loading ? <p className="font-14 text-muted mb-1">{CommaNumber(data.length ? data.length : 0)} Results found.</p> : null}
                    </Container.Column>
                </Container.Row>

                <Container.Row className="text-center pt-0 pb-4">
                    {data && data.length ?
                        data.map((item, i) =>
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
                    </Container.Column>
                </Container.Row> */}
            </Container.Fluid>

            <Footer />
        </div >
    );
};

export default Index;
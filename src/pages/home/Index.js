
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Banner } from '../../components/banner/Index';
import { Container } from '../../components/container/Index';
import { Footer } from '../../components/footer/Index';
import { CustomButton } from '../../components/button/Index';
import { Loader } from '../../components/loader/Index'
import { Requests } from '../../utils/requests/Index';

const Index = () => {
    const history = useHistory()
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    // fetch data
    const fetchData = useCallback(async () => {
        try {
            const response = await Requests.Web.Home()
            if (response && response.status === 200) {
                setData(response.data.data)
            }

            setLoading(false)
        } catch (error) {
            if (error) setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const handleImage = (id) => history.push(`/photo/${id}`)

    return (
        <div>
            <NavbarGeneral />
            <Banner />

            {isLoading && !data.length ? <Loader /> : null}

            <Container.Fluid className="py-4">

                {!isLoading && data.length ?
                    <Container.Row>
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
                    </Container.Row>
                    : null
                }

                <Container.Row>
                    {/* Discover more button */}
                    <Container.Column className="text-center pt-5 pb-4">
                        <Link to="/photos">
                            <CustomButton
                                style={{ borderRadius: 25, padding: "10px 30px", fontSize: 15 }}
                                className="btn-success border-0">
                                Discover More
                            </CustomButton>
                        </Link>
                    </Container.Column>

                    <Container.Column className="col-md-10 col-lg-8 col-xxl-5 m-auto text-center pb-4">
                        <h3 className="mb-4">Free images, you can use anywhere</h3>
                        <p className="mb-0">Pirate Pixel is a vibrant community of creatives, sharing copyright free images. All contents are released under the Pirate Pixel License, which makes them safe to use without asking for permission or giving credit to the artist - even for commercial purposes.</p>
                        <Link to="/faq" className="text-primary text-decoration-none">Learn more...</Link>
                    </Container.Column>
                </Container.Row>
            </Container.Fluid>

            <Footer />
        </div>
    );
};

export default Index;
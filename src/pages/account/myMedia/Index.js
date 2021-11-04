import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../../components/button/Index';
import { Container } from '../../../components/container/Index';
import { OverlayImage } from '../../../components/image/OverlayImage';
import { Loader } from '../../../components/loader/Index';
import { Requests } from '../../../utils/requests/Index';

const Index = () => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    // fetch data
    const fetchData = useCallback(async () => {
        try {
            const response = await Requests.Account.MyMedia()
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

    return (
        <div>
            <Container.Fluid>

                {isLoading && !data.length ? <Loader /> : null}

                {/* If media not available */}
                {!isLoading && !data.length ?
                    <Container.Row>
                        <Container.Column className="text-center py-30">
                            <h4 className="text-dark mb-2">Wow, that's a very clean portfolio!</h4>
                            <p className="font-14 text-muted mb-4">Upload your favourite images on PiratePixel.</p>
                            <Link to="/account/upload">
                                <CustomButton
                                    className="font-15 btn-success border-0"
                                    style={{ padding: "10px 30px", borderRadius: 25 }}
                                >Upload images</CustomButton>
                            </Link>
                        </Container.Column>
                    </Container.Row>
                    : null
                }

                {/* Images */}
                {!isLoading && data.length ?
                    <Container.Row className="py-30">
                        {data && data.map((item, i) =>
                            <Container.Column
                                key={i}
                                className="col-sm-6 col-md-4 col-lg-3 p-1"
                            >
                                <OverlayImage
                                    src={item.image}
                                    message={!item.isApproved ? "Pending" : null}
                                />
                            </Container.Column>
                        )}
                    </Container.Row>
                    : null
                }

            </Container.Fluid>
        </div>
    );
};

export default Index;
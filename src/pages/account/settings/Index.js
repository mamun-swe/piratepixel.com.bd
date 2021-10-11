import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../../../components/container/Index'
import { Card } from '../../../components/card/Index'
import { CircleImage } from '../../../components/image/Image'
import { CustomButton } from '../../../components/button/Index'
import { Images } from '../../../utils/Images'

const Index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setLoading] = useState(false)

    

    const onSubmit = async (data) => {
        console.log(data);

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    return (
        <div className="settings-container">
            <Container.Fluid>
                <Container.Row>
                    <Container.Column className="col-md-8 col-lg-10 col-xxl-8 m-auto py-30">
                        <Card.Simple className="border-0">
                            <Card.Body className="px-30 py-30">
                                <Container.Row>

                                    {/* Image container */}
                                    <Container.Column className="col-lg-5 pt-lg-4">
                                        <div className="image-container m-auto" style={{ width: 200 }}>
                                            <CircleImage
                                                src={Images.User}
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                    </Container.Column>

                                    {/* Form container */}
                                    <Container.Column className="col-lg-7 mt-4 mt-lg-0">
                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            {/* Name */}
                                            <div className="form-group mb-3">
                                                <small>Name</small>

                                                <input
                                                    type="text"
                                                    placeholder="Your name"
                                                    className={errors.name ? "form-control shadow-none error" : "form-control shadow-none"}
                                                    {...register("name", { required: true })}
                                                />
                                            </div>

                                            {/* City */}
                                            <div className="form-group mb-3">
                                                <small>City</small>

                                                <input
                                                    type="text"
                                                    placeholder="Your city"
                                                    className="form-control shadow-none"
                                                    {...register("city")}
                                                />
                                            </div>

                                            {/* Country */}
                                            <div className="form-group mb-4">
                                                <small>Country</small>

                                                <input
                                                    type="text"
                                                    placeholder="Your country name"
                                                    className="form-control shadow-none"
                                                    {...register("country")}
                                                />
                                            </div>

                                            {/* Submit button */}
                                            <div className="text-center">
                                                <CustomButton
                                                    type="submit"
                                                    className="btn-success border-0 font-14"
                                                    style={{ padding: "12px 35px", borderRadius: 25 }}
                                                    disabled={isLoading}
                                                >
                                                    {isLoading ? "Saving..." : "Save Changes"}
                                                </CustomButton>
                                            </div>
                                        </form>
                                    </Container.Column>
                                </Container.Row>
                            </Card.Body>
                        </Card.Simple>
                    </Container.Column>
                </Container.Row>
            </Container.Fluid>
        </div>
    );
};

export default Index;

import React, { useState } from 'react';
import './style.scss';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Container } from '../../components/container/Index'
import { Card } from '../../components/card/Index';
import { Footer } from '../../components/footer/Index';
import { CustomButton } from '../../components/button/Index';
import { Images } from '../../utils/Images'

const Index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        console.log(data);

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    return (
        <div>
            <NavbarGeneral searchable />

            {/* Auth container */}
            <Container.Basic>
                <Container.Row>
                    <Container.Column>
                        <div className="auth-container py-4 py-lg-5 my-lg-3">
                            <Card.Simple className="rounded shadow-sm border-0">
                                <Card.Header className="bg-white rounded border-0 px-4 py-30">
                                    <div className="d-flex">
                                        <div
                                            className="rounded"
                                            style={{ height: 40, width: 40, overflow: "hidden" }}
                                        >
                                            <img
                                                src={Images.Logo}
                                                className="img-fluid"
                                                style={{ height: 40, width: 40 }}
                                                alt="..." />
                                        </div>
                                        <div className="ps-2">
                                            <h6 className="fw-bolder font-18 mb-0">Login</h6>
                                            <p className="text-muted font-14 mb-0">Login your account & manage your profile.</p>
                                        </div>
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-4 pt-0">
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        {/* E-mail */}
                                        <div className="form-group mb-3">
                                            {errors.email && errors.email.message ?
                                                <small className="text-danger">{errors.email && errors.email.message}</small> :
                                                <small>E-mail</small>
                                            }

                                            <input
                                                type="text"
                                                placeholder="example@gmail.com"
                                                className={errors.email ? "form-control shadow-none error" : "form-control shadow-none"}
                                                {...register("email", {
                                                    required: "E-mail is required.",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                            />
                                        </div>

                                        {/* Password */}
                                        <div className="form-group mb-3">
                                            {errors.password && errors.password.message ?
                                                <small className="text-danger">{errors.password && errors.password.message}</small> :
                                                <small>Password</small>
                                            }

                                            <input
                                                type="password"
                                                name=""
                                                placeholder="*****"
                                                className={errors.password ? "form-control shadow-none error" : "form-control shadow-none"}
                                                {...register("password", { required: "Password is required." })}
                                            />
                                        </div>

                                        {/* Submit button */}
                                        <CustomButton
                                            type="submit"
                                            className="btn-primary border-0 shadow-none font-14 w-100"
                                            style={{ padding: "10px" }}
                                            disabled={isLoading}
                                        >{isLoading ? "LOADING..." : "SUBMIT"}</CustomButton>

                                        <div className="text-end mt-3">
                                            <p className="font-14 text-muted mb-0">Have no account ? <Link href="/register">Register</Link></p>
                                            <p className="font-14 text-muted mb-0">Forgot password ? <Link href="/reset">Reset</Link></p>
                                        </div>
                                    </form>
                                </Card.Body>
                            </Card.Simple>
                        </div>
                    </Container.Column>
                </Container.Row>
            </Container.Basic>

            <Footer />
        </div>
    );
};

export default Index;
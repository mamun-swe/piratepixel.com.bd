
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
// import FacebookLogin from 'react-facebook-login';
import { Unlock } from 'react-feather';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Container } from '../../components/container/Index'
import { Card } from '../../components/card/Index';
import { Footer } from '../../components/footer/Index';
import { CustomButton } from '../../components/button/Index';
import { Toastify } from '../../components/toastify/Toastify'
import { Images } from '../../utils/Images';
import { Requests } from '../../utils/requests/Index';


const Index = () => {
    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setLoading] = useState(false)

    // Facebook response
    // const responseFacebook = (response) => {
    //     const data = {
    //         name: response.name,
    //         email: response.email
    //     }
    //     console.log(data);
    // }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) history.push('/account')
    }, [history])

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const response = await Requests.Auth.Login(data)
            if (response && response.status === 200) {
                localStorage.setItem("token", response.data.token)
                history.push('/account')
            }

            setLoading(false)
        } catch (error) {
            if (error) {
                setLoading(false)
                if (error.response && error.response.data) {
                    Toastify.Error(error.response.data.message)
                }
            }
        }
    }

    return (
        <div>
            <NavbarGeneral searchable />

            <Container.Basic>
                <Container.Row>
                    <Container.Column className="col-12 col-lg-9 m-auto">
                        <div className="py-4 py-lg-5 my-lg-3">
                            <Card.Simple className="rounded shadow-sm border-0">
                                <Card.Header className="bg-white rounded border-0 px-4 py-30">
                                    <div className="d-flex">
                                        <div className="pt-1">
                                            <Unlock size={25} />
                                        </div>
                                        <div className="ps-2">
                                            <h6 className="fw-bolder font-18 mb-0">Login</h6>
                                            <p className="text-muted font-14 mb-0">Login your account & manage your profile.</p>
                                        </div>
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-4 pt-0">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Container.Row>
                                            <Container.Column className="col-lg-6">

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
                                                >{isLoading ? "LOADING..." : "LOGIN"}</CustomButton>
                                            </Container.Column>

                                            {/* Social media login buttons */}
                                            <Container.Column className="col-lg-6 text-end text-lg-center">
                                                <div className="d-none d-lg-block">
                                                    <img src={Images.Register} className="img-fluid" alt="..." />
                                                </div>

                                                {/* Facebook login button */}
                                                {/* <FacebookLogin
                                                    appId="261936559215416"
                                                    autoLoad={true}
                                                    fields="name,email"
                                                    callback={responseFacebook}
                                                    cssClass="my-facebook-button-class"
                                                    onClick={
                                                        <CustomButton
                                                            type="button"
                                                        >Login with facebook</CustomButton>
                                                    }
                                                /> */}

                                                <div className="mt-3">
                                                    <p className="font-14 text-muted mb-0">Have no account? <Link to="/register">Register</Link></p>
                                                    <p className="font-14 text-muted mb-0">Forgot password? <Link to="/reset">Reset</Link></p>
                                                </div>
                                            </Container.Column>
                                        </Container.Row>
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
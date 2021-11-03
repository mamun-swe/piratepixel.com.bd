import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../../../components/container/Index'
import { Card } from '../../../components/card/Index'
import { CircleImage } from '../../../components/image/Image'
import { CustomButton } from '../../../components/button/Index'
import { Loader } from '../../../components/loader/Index'
import { NoContent } from '../../../components/204/NoContent'
import { NetworkError } from '../../../components/501/NetworkError'
import { Toastify } from '../../../components/toastify/Toastify'
import { UploadButton } from '../../../components/fileUploader/UploadButton'
import { Images } from '../../../utils/Images'
import { Requests } from '../../../utils/requests/Index'

const Index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [isUpdating, setUpdate] = useState(false)
    const [serverError, setServerError] = useState(false)
    const [image, setImage] = useState({ value: null, loading: false })

    // fetch data
    const fetchData = useCallback(async () => {
        try {
            const response = await Requests.Account.Profile()
            if (response && response.status === 200) {
                setData(response.data.data)
                setImage(exImage => ({
                    ...exImage,
                    value: response.data.data && response.data.data.image ? response.data.data.image : Images.Avatar
                }))
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
        fetchData()
    }, [fetchData])

    // handle image change
    const hanleImageChange = async (file) => {
        try {
            setImage({ value: URL.createObjectURL(file), loading: true })
            const formData = new FormData()
            formData.append("image", file)

            const response = await Requests.Account.UpdateProfileImage(formData)
            if (response && response.status === 201) {
                Toastify.Success(response.data.message)
            }

            setImage(exImage => ({ ...exImage, loading: false }))
        } catch (error) {
            if (error) {
                setImage(exImage => ({ ...exImage, loading: false }))
                if (error.response && error.response.data && error.response.data.message) {
                    Toastify.Error(error.response.data.message)
                }
            }
        }
    }

    // Submit form data
    const onSubmit = async (data) => {
        try {
            setUpdate(true)
            const response = await Requests.Account.UpdateProfile(data)
            if (response && response.status === 201) {
                Toastify.Success(response.data.message)
            }

            setUpdate(false)
        } catch (error) {
            if (error) {
                setUpdate(false)
                if (error.response && error.response.data && error.response.data.message) {
                    Toastify.Error(error.response.data.message)
                }
            }
        }
    }

    return (
        <div className="settings-container">

            {isLoading && !Object.keys(data).length ? <Loader /> : null}
            {!isLoading && !Object.keys(data).length && !serverError ? <NoContent message="No data found!!!" /> : null}
            {!isLoading && !Object.keys(data).length && serverError ? <NetworkError message="Network error!!!" /> : null}

            {!isLoading && Object.keys(data).length ?
                <Container.Fluid>
                    <Container.Row>
                        <Container.Column className="col-md-8 col-lg-10 col-xxl-8 m-auto py-30">
                            <Card.Simple className="border-0">
                                <Card.Body className="px-30 py-30">
                                    <Container.Row>

                                        {/* Image container */}
                                        <Container.Column className="col-lg-5 pt-lg-4">
                                            <div className="image-container m-auto" style={{ width: 160 }}>
                                                <CircleImage
                                                    src={image.value}
                                                    width={160}
                                                    height={160}
                                                />

                                                <div className="pt-3">
                                                    <UploadButton
                                                        className="text-center m-auto"
                                                        disabled={image.loading}
                                                        onChange={event => hanleImageChange(event.target.files[0])}
                                                    >{image.loading ? "Loading..." : "Change Image"}</UploadButton>
                                                </div>
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
                                                        defaultValue={data.name || null}
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
                                                        defaultValue={data.city || null}
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
                                                        defaultValue={data.country || null}
                                                        {...register("country")}
                                                    />
                                                </div>

                                                {/* Submit button */}
                                                <div className="text-center">
                                                    <CustomButton
                                                        type="submit"
                                                        className="btn-success border-0 font-14"
                                                        style={{ padding: "12px 35px", borderRadius: 25 }}
                                                        disabled={isUpdating}
                                                    >
                                                        {isUpdating ? "Saving..." : "Save Changes"}
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
                : null
            }
        </div>
    );
};

export default Index;
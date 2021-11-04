import React, { useState } from 'react';
import fileSize from 'file-size';
import { Card } from '../card/Index';
import { SingleSelect } from '../select/Index'
import { CustomButton } from '../button/Index'
import { Toastify } from '../toastify/Toastify'
import { Requests } from '../../utils/requests/Index';

export const UploadProgressCard = (props) => {
    const [category, setCategory] = useState({ value: null, error: null })
    const [tags, setTags] = useState({ values: [], error: null })
    const [isLoading, setLoading] = useState(false)

    // Handle tags
    const handleTags = value => {
        if (tags.values.length) {
            const isAvailable = tags.values.find(x => x === value)

            if (isAvailable) {
                const withoutValue = tags.values.filter(x => x !== value)

                setTags({
                    ...tags,
                    values: withoutValue,
                    error: null
                })
            } else {
                setTags({
                    ...tags,
                    values: [...tags.values, value],
                    error: null
                })
            }
        } else {
            setTags({
                ...tags,
                values: [...tags.values, value],
                error: null
            })
        }
    }

    // Activated tag
    const isActive = value => {
        const isAvailable = tags.values.find(x => x === value)
        if (isAvailable) {
            return true
        }
        return false
    }

    // Handle submit
    const handleSubmit = async () => {
        try {
            let isError = false

            if (!category.value) {
                setCategory({ ...category, error: true })
                isError = true
            }
            if (!tags.values.length) {
                setTags({ ...tags, error: "Tags is required." })
                isError = true
            }

            if (isError) return

            setLoading(true)
            const formData = new FormData()
            formData.append("category", category.value)
            formData.append("tags", JSON.stringify(tags.values))
            formData.append("image", props.data)

            const response = await Requests.Account.UploadMedia(formData)
            if (response && response.status === 201) {
                Toastify.Success(response.data.message)
            }
            setLoading(false)
        } catch (error) {
            if (error) {
                setLoading(false)
                Toastify.Error("Network error!")
            }
        }
    }
    return (
        <Card.Simple className="upload-progress-container rounded border-0 mb-3">
            <Card.Body className="p-3">
                <div className="text-center mb-4">
                    <img
                        src={URL.createObjectURL(props.data)}
                        alt={props.data.name}
                        width={250}
                        height={250}
                    />
                </div>
                <div>
                    <p className="fw-bolder font-14 mb-1">File details</p>
                    <p className="font-14 mb-0">{props.data.name}</p>
                    <p className="font-14 text-muted mb-3">Size {fileSize(props.data.size).human('si')}</p>

                    {/* Category selector */}
                    <div className="form-group mb-4" style={{ width: "50%" }}>
                        <SingleSelect
                            placeholder="category"
                            borderRadius={25}
                            error={category.error}
                            options={props.categories}
                            value={data => setCategory({ value: data.value, error: null })}
                        />
                    </div>

                    {/* Tags selector */}
                    <div className="form-group mb-4">
                        {tags.error ?
                            <p className="mb-2 font-13 text-danger">{tags.error}<sup className="text-danger">*</sup></p> :
                            <p className="mb-2 font-13 text-muted">Select tags<sup className="text-danger">*</sup></p>
                        }

                        <ul className="list-inline">
                            {props.tags && props.tags.map((item, i) =>
                                <li
                                    key={i}
                                    className={
                                        isActive(item) ?
                                            "list-inline-item mb-2 border rounded-pill bg-success text-dark bg-opacity-25" :
                                            "list-inline-item mb-2 border rounded-pill text-dark"
                                    }
                                    role="button"
                                    onClick={() => handleTags(item)}
                                >
                                    <p className="mb-0 font-13 px-2 py-1">{item}</p>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Uploader button */}
                    <div className="text-center">
                        <CustomButton
                            type="button"
                            className="btn-success border-0 rounded-pill px-4 py-2 font-14"
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            {isLoading ? "Uploading..." : "Upload"}
                        </CustomButton>
                    </div>
                </div>
            </Card.Body>
        </Card.Simple>
    );
};

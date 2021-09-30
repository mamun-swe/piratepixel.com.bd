
import React from 'react';
import './style.scss';
import { useForm } from 'react-hook-form';
import { Search } from 'react-feather'


// Large search component
export const SearchLarge = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    // handle submit
    const onSubmit = data => props.onSearch(data)

    return (
        <div className="search-container-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-0">
                    <input
                        type="text"
                        placeholder="Search images"
                        className={errors.query ? "form-control shadow-none error" : "form-control shadow-none"}
                        {...register("query", { required: true })}
                    />

                    <Search
                        size={23}
                        className={errors.query ? "search-icon text-danger" : "search-icon text-muted"}
                    />
                </div>
            </form>
        </div>
    );
};


// Small search component
export const SearchSmall = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    // handle submit
    const onSubmit = data => props.onSearch(data)

    return (
        <div className="search-container-sm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-0">
                    <input
                        type="text"
                        placeholder="Search images"
                        className={errors.query ? "form-control shadow-none error" : "form-control shadow-none"}
                        {...register("query", { required: true })}
                    />

                    <Search
                        size={16}
                        className={errors.query ? "search-icon text-danger" : "search-icon text-muted"}
                    />
                </div>
            </form>
        </div>
    )
}
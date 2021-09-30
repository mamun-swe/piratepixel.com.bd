import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../components/button/Index'
import { Images } from '../../utils/Images'

const Index = () => {
    return (
        <div className="four-o-four">
            <div className="flex-center flex-column">
                <img src={Images.FourOFour} className="img-fluid" alt="..." />
                <h6 className="text-center fw-bolder mb-4">What are you looking for ? <br />Page not found!!!</h6>
                <Link to="/">
                    <CustomButton
                        className="btn-danger border-0 px-4 py-2"
                    >Go Back</CustomButton>
                </Link>
            </div>
        </div>
    );
}

export default Index;
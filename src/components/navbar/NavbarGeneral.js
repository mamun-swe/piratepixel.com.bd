
import React, { useState, useCallback, useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { ChevronDown, Menu, Upload, User } from 'react-feather';
import { Container } from '../container/Index';
import { CustomButton } from '../button/Index';
import { SearchSmall } from '../search/Index'
import { CustomDrawer } from '../drawer/Index'
import { Images } from '../../utils/Images';
import { Requests } from '../../utils/requests/Index'

export const NavbarGeneral = (props) => {
    const history = useHistory()
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)

    // fetch data
    const fetchData = useCallback(async () => {
        try {
            const response = await Requests.Web.Category()
            if (response && response.status === 200) {
                setData(response.data.data)
            }
        } catch (error) {
            if (error) setData([])
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    // handle to go upload
    const goUpload = () => {
        if (localStorage.getItem("token")) {
            history.push("/account/upload")
        } else {
            history.push("/login")
        }
    }

    // handle logout
    const doLogout = () => {
        localStorage.removeItem("token")
        history.push("/")
    }

    return (
        <div className="navbar-general bg-white">
            <Container.Fluid>
                <Container.Row>
                    <Container.Column>
                        <div className="d-flex">

                            {/* Logo containerc */}
                            <div className="logo-contaier">
                                <Link to="/"><img src={Images.Logo} className="img-fluid" alt="Pirate Pixel logo" /></Link>
                            </div>

                            {/* Items container */}
                            {props.searchable ?
                                <div className="px-2 px-md-4">
                                    <SearchSmall onSearch={value => history.push(`/search?query=${value.query}`)} />
                                </div>
                                :

                                <div className="items-container d-none d-lg-block ps-lg-4">
                                    <ul>
                                        <li><Link to="/photos">Photos</Link></li>
                                        <li>
                                            <DropdownButton
                                                variant="white"
                                                className="shadow-none"
                                                title={<span>Categories <ChevronDown size={15} /></span>}
                                            >
                                                {data && data.length ?
                                                    data.map((item, i) =>
                                                        <Dropdown.Item
                                                            key={i}
                                                            as={Link}
                                                            to={`/category/${item._id}`}
                                                        >{item.name}</Dropdown.Item>
                                                    ) : null
                                                }
                                            </DropdownButton>
                                        </li>
                                    </ul>
                                </div>
                            }

                            {/* Links container & drawer menu container */}
                            <div className="ms-auto">
                                <div className="d-flex">
                                    <div>
                                        <DropdownButton
                                            variant="white"
                                            className="profile-dropdown-btn-container"
                                            drop="down"
                                            align="end"
                                            title={<User size={20} />}
                                        >
                                            <Dropdown.Item as={Link} to="/account">My Media</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/account/upload">Upload</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/account/settings">Settings</Dropdown.Item>
                                            <Dropdown.Item onClick={doLogout}>Logout</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                    <div>
                                        <CustomButton
                                            className="btn-success border-0 d-none d-lg-block ms-2"
                                            style={{ fontSize: 14, borderRadius: 25, padding: "6px 20px", marginTop: 2 }}
                                            onClick={goUpload}
                                        >
                                            <Upload size={14} /> Upload
                                        </CustomButton>
                                    </div>
                                    <div>
                                        <CustomButton
                                            className="btn-gray rounded-circle d-lg-none circle__padding__sm ms-2"
                                            onClick={() => setShow(true)}
                                        >
                                            <Menu size={20} />
                                        </CustomButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container.Column>
                </Container.Row>
            </Container.Fluid>

            {/* Mobile drawer */}
            <CustomDrawer
                show={show}
                data={data}
                onHide={() => setShow(false)}
            />
        </div>
    );
};

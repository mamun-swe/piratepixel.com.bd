import React from 'react';
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export const AccountNavbar = () => {
    return (
        <div className="account-navbar-container mt-2 d-none d-lg-block">
            <Nav className="justify-content-center">
                <Nav.Item>
                    <NavLink
                        exact
                        to="/account"
                        activeClassName="is-active"
                    >My Media</NavLink>
                    <NavLink
                        exact
                        to="/account/upload"
                        activeClassName="is-active"
                    >Upload</NavLink>
                    <NavLink
                        exact
                        to="/account/settings"
                        activeClassName="is-active"
                    >Settings</NavLink>
                </Nav.Item>
            </Nav>
        </div>
    );
};

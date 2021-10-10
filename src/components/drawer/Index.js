
import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { Offcanvas, Accordion } from 'react-bootstrap';

export const CustomDrawer = (props) => {
    return (
        <div>
            <Offcanvas
                show={props.show}
                onHide={props.onHide}
                style={{ width: 250, border: 0 }}
            >
                <Offcanvas.Body>
                    <Link to="/photos">Photos</Link>

                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Button className="shadow-none px-0">Categories</Accordion.Button>
                            <Accordion.Body className="p-0">
                                <Link to="/photos">Photos</Link>
                                <Link to="/photos">Photos</Link>
                                <Link to="/photos">Photos</Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

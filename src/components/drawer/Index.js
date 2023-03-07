import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Offcanvas, Accordion } from "react-bootstrap";

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
              <Accordion.Button className="shadow-none px-0">
                Categories
              </Accordion.Button>
              <Accordion.Body className="p-0">
                {props.data && props.data.length
                  ? props.data.map((item, i) => (
                      <Link key={i} to={`/category/${item._id}`}>
                        {item.name}
                      </Link>
                    ))
                  : null}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

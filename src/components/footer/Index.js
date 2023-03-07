import React from "react";
import "./style.css";
import { Container } from "../container/Index";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container border-top">
      <Container.Fluid>
        <Container.Row>
          {/* About */}
          <Container.Column className="col-lg-4 mb-4 mb-lg-0 pe-lg-5">
            <h6 className="mb-3">Pirate Pixel</h6>
            <p className="font-15 text-muted mb-0">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.Reference site about
              Lorem Ipsum
            </p>
          </Container.Column>

          {/* Policy Info */}
          <Container.Column className="col-lg-4 mb-4 mb-lg-0">
            <h6 className="mb-3">Policy & Info.</h6>
            <div className="mb-1">
              <Link className="text-muted font-15" to="/about">
                About us
              </Link>
            </div>
            <div className="mb-1">
              <Link className="text-muted font-15" to="/privacy-policy">
                Privacy Policy
              </Link>
            </div>
            <div className="mb-1">
              <Link className="text-muted font-15" to="/faq">
                FAQs
              </Link>
            </div>
          </Container.Column>

          {/* My Account */}
          <Container.Column className="col-lg-4">
            <h6 className="mb-3">My Account</h6>
            <div className="mb-1">
              <Link className="text-muted font-15" to="/account/settings">
                Profile
              </Link>
            </div>
            <div className="mb-1">
              <Link className="text-muted font-15" to="/account">
                My Media
              </Link>
            </div>
            <div className="mb-1">
              <Link className="text-muted font-15" to="/account/upload">
                Upload
              </Link>
            </div>
          </Container.Column>
        </Container.Row>
      </Container.Fluid>
    </div>
  );
};

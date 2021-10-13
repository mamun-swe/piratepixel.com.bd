
import React from 'react';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Container } from '../../components/container/Index';
import { CircleImage } from '../../components/image/Image'
import { Footer } from '../../components/footer/Index';
import { Images } from '../../utils/Images';

const Index = () => {
    const members = [
        { image: Images.CTO, name: "Abdullah Al Mamun", position: "CTO" },
        { image: Images.VP, name: "John", position: "VP of Engineering" },
        { image: Images.TL, name: "Bjorn", position: "Engineering Manager" },
        { image: Images.VP, name: "Ivar", position: "Staff Software Engineer" },
        { image: Images.TL, name: "Ragnar Lothbrok", position: "Tech Lead" },
        { image: Images.VP, name: "Ubba", position: "Senior Software Engineer" },
        { image: Images.TL, name: "Siguard", position: "Software Engineer" },
        { image: Images.VP, name: "lagertha", position: "DevOps Engineer" },
        { image: Images.TL, name: "Torvi", position: "Site Reliability Engineer" },
    ]

    return (
        <div>
            <NavbarGeneral />

            <Container.Basic className="py-30">
                <Container.Row>
                    <Container.Column className="col-lg-9 m-auto">
                        <h3 className="fw-light">About Us</h3>
                        <hr />
                        <p className="fw-bold font-17 mb-3">Company</p>
                        <p className="fw-bolder font-15 mb-0">Address:</p>
                        <p className="font-15 mb-0">PiratePixel</p>
                        <p className="font-15 mb-0">Dhaka</p>
                        <p className="font-15 mb-3">Bangladesh</p>

                        <p className="fw-bolder font-15 mb-0">Contact</p>
                        <p className="font-15 mb-0">Phone: +880 1XXX XXXX XX</p>
                        <p className="font-15 mb-3">Email address: <a className="text-decoration-none text-primary" href="mailto:info@piratepixel.com">info@piratepixel.com</a></p>
                        <p className="font-15 mb-0"><span className="text-primary">PiratePixel</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br />
                        <hr className="mb-4" />

                        {/* Profile card */}
                        {members && members.map((item, i) =>
                            <div className="d-md-flex text-center text-md-start py-30" key={i}>
                                <div>
                                    <div className="m-auto" style={{ width: 130, height: 130 }}>
                                        <CircleImage src={item.image} width={130} height={130} />
                                    </div>
                                </div>
                                <div className="flex-grow-1 ps-md-5 pt-4 pt-md-2 py-2">
                                    <h6 className="text-capitalize fw-bolder font-15 mb-3">{item.name}, {item.position}</h6>
                                    <p className="font-15  mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            </div>
                        )}

                    </Container.Column>
                </Container.Row>
            </Container.Basic>

            <Footer />
        </div>
    );
}

export default Index;
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Footer } from '../../components/footer/Index';
import { Container } from '../../components/container/Index';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';

const Index = () => {
    const faqs = [
        { title: "What is PiratePixel?" },
        { title: "Can I use your images?" },
        { title: "May PiratePixel images be used on Facebook and other social platforms?" },
        { title: "I found a great photo, how can I donate to that user?" },
        { title: "Does Pixabay offer an API?" },
        { title: "How do I delete my account?" },
        { title: "What do the labels Featured and Publish mean?" },
        { title: "Why was my image not accepted?" },
        { title: "NO HOTLINKING - what does that mean?" },
        { title: "I found a great photo, how can I donate to that user?" }
    ]


    return (
        <div>
            <NavbarGeneral searchable />

            <Container.Basic className="py-30">
                <Container.Row>
                    <Container.Column className="col-lg-9 m-auto">
                        <h4 className="fw-light mb-4">FAQs</h4>

                        <Accordion flush>
                            {faqs && faqs.map((item, i) =>
                                <Accordion.Item eventKey={i} key={i}>
                                    <Accordion.Button
                                        className="shadow-none font-14 fw-bolder text-dark bg-none"
                                    >{item.title}</Accordion.Button>
                                    <Accordion.Body>
                                        <p className="font-15 lh-lg mb-0">
                                            A cookie is a small file containing a string of characters that is sent to your computer when you visit a website. When you visit the website again, the cookie allows that site to recognize your browser. Cookies are used on Pixabay to store visitor preferences and other technical information required for the functionality of the Website. No personal information is stored in these cookies. You can reset your browser to refuse all cookies or to indicate when a cookie is being sent. However, some website features or services may not function properly without cookies.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )}
                        </Accordion>

                    </Container.Column>
                </Container.Row>
            </Container.Basic>

            <Footer />
        </div>
    );
};

export default Index;
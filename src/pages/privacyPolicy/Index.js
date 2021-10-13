import React from 'react';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Footer } from '../../components/footer/Index';
import { Container } from '../../components/container/Index';

const Index = () => {
    return (
        <div>
            <NavbarGeneral searchable />

            <Container.Basic className="py-30">
                <Container.Row>
                    <Container.Column className="col-lg-9 m-auto">
                        <p className="fw-bold font-18 mb-3">Privacy Policy</p>
                        <p className="font-15 lh-lg mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <p className="fw-bold font-15 mb-2">Personal information</p>
                        <p className="font-15 lh-lg mb-2">
                            You may provide certain personal information, such as your first and last name, the country you live in, PayPal address, and email address, which will be displayed on your public profile page on PiratePixel.
                        </p>

                        <p className="font-15 lh-lg mb-2">
                            Whenever you visit a page, our servers automatically record certain information that your web browser sends. This may include information such as your IP address, browser type and language, pages viewed, the date and time. This data is used for ensuring the stability of our provided services and is deleted automatically after seven days.
                        </p>

                        <p className="font-15 lh-lg mb-2">
                            We respect and are committed to protecting your privacy. We do not sell or otherwise provide personal information to other companies for the marketing of their own products or services. We will retain your personal information for as long as your account is active or as needed to provide you services or as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
                        </p>

                        <p className="font-15 lh-lg mb-4">
                            We reserve the right to disclose your personal information as required by law (e.g., to comply with a subpoena, warrant, or court order) and when we believe that disclosure is necessary to protect our rights, avoid litigation, protect your safety or the safety of others, investigate fraud, and/or respond to a government request. We may also disclose information about you if we determine that such disclosure should be made for reasons of national security, law enforcement, or other issues of public importance.
                        </p>

                        <p className="fw-bold font-15 mb-2">Cookies</p>
                        <p className="font-15 lh-lg mb-0">
                            A cookie is a small file containing a string of characters that is sent to your computer when you visit a website. When you visit the website again, the cookie allows that site to recognize your browser. Cookies are used on Pixabay to store visitor preferences and other technical information required for the functionality of the Website. No personal information is stored in these cookies. You can reset your browser to refuse all cookies or to indicate when a cookie is being sent. However, some website features or services may not function properly without cookies.
                        </p>

                    </Container.Column>
                </Container.Row>
            </Container.Basic>

            <Footer />
        </div >
    );
};

export default Index;
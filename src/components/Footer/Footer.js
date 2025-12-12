import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import {
    FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp,
    FaCode, FaPhone, FaMapMarkerAlt
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/Kandulanaveennaidu', label: 'GitHub' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/kandulanaveen1/', label: 'LinkedIn' },
        { icon: <FaEnvelope />, url: 'mailto:kandulanaveennaidu017@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="footer">
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col lg={4} md={6} className="mb-4 mb-lg-0">
                            <div className="footer-brand">
                                <h3>
                                    <span className="brand-highlight">K</span>andula Naveen
                                </h3>
                                <p>
                                    Full Stack Developer passionate about creating impactful
                                    digital solutions. Let's build something amazing together!
                                </p>
                                <div className="footer-social">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                            aria-label={link.label}
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Col>

                        <Col lg={2} md={6} className="mb-4 mb-lg-0">
                            <div className="footer-links">
                                <h4>Quick Links</h4>
                                <ul>
                                    {quickLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                to={link.to}
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} md={6} className="mb-4 mb-lg-0">
                            <div className="footer-links">
                                <h4>Services</h4>
                                <ul>
                                    <li><span>Web Development</span></li>
                                    <li><span>API Development</span></li>
                                    <li><span>Cloud Solutions</span></li>
                                    <li><span>Database Design</span></li>
                                    <li><span>UI/UX Design</span></li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} md={6}>
                            <div className="footer-contact">
                                <h4>Contact Info</h4>
                                <div className="contact-item">
                                    <FaMapMarkerAlt />
                                    <span>Hyderabad, India</span>
                                </div>
                                <div className="contact-item">
                                    <FaEnvelope />
                                    <span>kandulanaveennaidu017@gmail.com</span>
                                </div>
                                <div className="contact-item">
                                    <FaPhone />
                                    <span>+91 9705627977</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="footer-bottom">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-start">
                            <p className="copyright">
                                © {currentYear} Kandula Naveen. All Rights Reserved.
                            </p>
                        </Col>
                        <Col md={6} className="text-center text-md-end">
                            <p className="made-with">
                                Designed & Developed by <strong>Naveen Kandula</strong> with <FaHeart className="heart-icon" /> & <FaCode className="code-icon" /> using React.js
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="footer-to-top"
            >
                <FaArrowUp />
            </Link>
        </footer>
    );
};

export default Footer;

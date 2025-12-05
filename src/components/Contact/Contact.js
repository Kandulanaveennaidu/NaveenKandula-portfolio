import React, { useState } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub,
    FaPaperPlane, FaUser, FaComment
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'aishwarya@gmail.com',
            link: 'mailto:aishwarya@gmail.com',
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            value: '+91 98765 43210',
            link: 'tel:+919876543210',
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            value: 'Hyderabad, India',
            link: '#',
        },
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, url: 'https://linkedin.com/in/aishwarya', label: 'LinkedIn' },
        { icon: <FaGithub />, url: 'https://github.com/aishwarya', label: 'GitHub' },
        { icon: <FaEnvelope />, url: 'mailto:aishwarya@gmail.com', label: 'Email' },
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
            setStatus({ type: '', message: '' });
        }, 5000);
    };

    return (
        <section id="contact" className="contact-section">
            <Container>
                <div className="section-title" data-aos="fade-up">
                    <span className="section-subtitle">Get In Touch</span>
                    <h2>Contact Me</h2>
                    <p>Have a project in mind? Let's work together to bring it to life!</p>
                </div>

                <Row>
                    <Col lg={5} data-aos="fade-right">
                        <div className="contact-info-wrapper">
                            <div className="contact-intro">
                                <h3>Let's Talk!</h3>
                                <p>
                                    I'm always excited to connect with fellow developers, potential employers,
                                    and anyone interested in collaboration. Feel free to reach out!
                                </p>
                            </div>

                            <div className="contact-info-cards">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        className="contact-info-card"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="info-icon">{info.icon}</div>
                                        <div className="info-content">
                                            <h4>{info.title}</h4>
                                            <p>{info.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="contact-social">
                                <h4>Connect With Me</h4>
                                <div className="social-links">
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
                        </div>
                    </Col>

                    <Col lg={7} data-aos="fade-left">
                        <div className="contact-form-wrapper">
                            <div className="form-header">
                                <HiSparkles className="sparkle" />
                                <h3>Send Me a Message</h3>
                            </div>

                            {status.message && (
                                <Alert variant={status.type === 'success' ? 'success' : 'danger'} className="custom-alert">
                                    {status.message}
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="form-group">
                                            <div className="input-wrapper">
                                                <FaUser className="input-icon" />
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="custom-input"
                                                />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="form-group">
                                            <div className="input-wrapper">
                                                <FaEnvelope className="input-icon" />
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="custom-input"
                                                />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="form-group">
                                    <div className="input-wrapper">
                                        <FaComment className="input-icon" />
                                        <Form.Control
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="custom-input"
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="form-group">
                                    <div className="input-wrapper textarea-wrapper">
                                        <FaComment className="input-icon" />
                                        <Form.Control
                                            as="textarea"
                                            name="message"
                                            rows={5}
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="custom-input custom-textarea"
                                        />
                                    </div>
                                </Form.Group>

                                <button type="submit" className="btn-primary-custom submit-btn">
                                    <FaPaperPlane className="me-2" />
                                    Send Message
                                </button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;

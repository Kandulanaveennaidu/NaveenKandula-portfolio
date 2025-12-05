import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const xPercent = (clientX / innerWidth - 0.5) * 20;
            const yPercent = (clientY / innerHeight - 0.5) * 20;

            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translate(${xPercent}px, ${yPercent}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/aishwarya', label: 'GitHub' },
        { icon: <FaLinkedin />, url: 'https://linkedin.com/in/aishwarya', label: 'LinkedIn' },
        { icon: <FaEnvelope />, url: 'mailto:aishwarya@gmail.com', label: 'Email' },
    ];

    return (
        <section id="hero" className="hero-section" ref={heroRef}>
            <div className="hero-bg-gradient"></div>
            <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
            </div>

            <Container>
                <Row className="align-items-center min-vh-100">
                    <Col lg={7} className="hero-content" data-aos="fade-up">
                        <div className="hero-badge">
                            <HiSparkles className="sparkle-icon" />
                            <span>Available for Work</span>
                        </div>

                        <h1 className="hero-title">
                            Hi, I'm <span className="gradient-text">Aishwarya</span>
                        </h1>

                        <h2 className="hero-subtitle">
                            <span className="typing-text">
                                <ReactTyped
                                    strings={[
                                        'Full Stack Developer',
                                        'Java Developer',
                                        'React.js Expert',
                                        'Spring Boot Developer',
                                        'UI/UX Enthusiast',
                                        'Cloud Computing Enthusiast'
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={30}
                                    backDelay={2000}
                                    loop
                                />
                            </span>
                        </h2>

                        <p className="hero-description">
                            Passionate Full Stack Developer with expertise in Java, Spring Boot, React.js, and cloud technologies.
                            I transform complex problems into elegant, scalable solutions that drive business success.
                        </p>

                        <div className="hero-buttons">
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="btn-primary-custom"
                            >
                                <FaEnvelope className="me-2" />
                                Get In Touch
                            </Link>
                            <a
                                href="/resume.pdf"
                                className="btn-secondary-custom"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaDownload className="me-2" />
                                Download CV
                            </a>
                        </div>

                        <div className="hero-social">
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
                    </Col>

                    <Col lg={5} className="hero-image-col" data-aos="fade-left" data-aos-delay="200">
                        <div className="hero-image-wrapper">
                            <div className="hero-image-bg"></div>
                            <div className="hero-avatar">
                                <div className="avatar-circle">
                                    <span className="avatar-initials">AK</span>
                                </div>
                                <div className="avatar-ring"></div>
                                <div className="avatar-ring ring-2"></div>
                            </div>
                            <div className="floating-card card-1">
                                <span className="card-icon">⚛️</span>
                                <span>React.js</span>
                            </div>
                            <div className="floating-card card-2">
                                <span className="card-icon">☕</span>
                                <span>Java</span>
                            </div>
                            <div className="floating-card card-3">
                                <span className="card-icon">🚀</span>
                                <span>Spring Boot</span>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="scroll-indicator"
                >
                    <FaArrowDown className="scroll-arrow" />
                    <span>Scroll Down</span>
                </Link>
            </Container>
        </section>
    );
};

export default Hero;

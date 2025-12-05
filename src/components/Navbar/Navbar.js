import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaCertificate, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', to: 'hero', icon: <FaHome /> },
        { name: 'About', to: 'about', icon: <FaUser /> },
        { name: 'Skills', to: 'skills', icon: <FaCode /> },
        { name: 'Experience', to: 'experience', icon: <FaBriefcase /> },
        { name: 'Projects', to: 'projects', icon: <FaProjectDiagram /> },
        { name: 'Education', to: 'education', icon: <FaGraduationCap /> },
        { name: 'Certifications', to: 'certifications', icon: <FaCertificate /> },
        { name: 'Contact', to: 'contact', icon: <FaEnvelope /> },
    ];

    return (
        <BootstrapNavbar
            expand="lg"
            fixed="top"
            expanded={expanded}
            className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
        >
            <Container>
                <BootstrapNavbar.Brand href="#hero" className="navbar-brand-custom">
                    <span className="brand-text">
                        <span className="brand-highlight">A</span>ishwarya
                    </span>
                </BootstrapNavbar.Brand>

                <BootstrapNavbar.Toggle
                    aria-controls="navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                    className="navbar-toggler-custom"
                >
                    <span className="toggler-icon"></span>
                </BootstrapNavbar.Toggle>

                <BootstrapNavbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        {navItems.map((item, index) => (
                            <Nav.Link
                                key={index}
                                as={Link}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-link-custom"
                                onClick={() => setExpanded(false)}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-text">{item.name}</span>
                            </Nav.Link>
                        ))}
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;

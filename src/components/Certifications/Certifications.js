import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaAward, FaMicrosoft } from 'react-icons/fa';
import {
    SiAmazonwebservices, SiOracle, SiSpring
} from 'react-icons/si';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            name: 'JavaScript Algorithms and Data Structures',
            issuer: 'freeCodeCamp',
            date: 'Completed',
            icon: <FaCertificate />,
            color: '#0a0a23',
            credentialId: 'FCC-JS-2023',
            link: 'https://www.freecodecamp.org/certification',
            skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
        },
        {
            id: 2,
            name: 'Front End Development Libraries',
            issuer: 'freeCodeCamp',
            date: 'Completed',
            icon: <FaCertificate />,
            color: '#0a0a23',
            credentialId: 'FCC-FED-2023',
            link: 'https://www.freecodecamp.org/certification',
            skills: ['React.js', 'Redux', 'Bootstrap', 'jQuery'],
        },
        {
            id: 3,
            name: 'Full Stack Web Development',
            issuer: 'Newton School',
            date: 'Completed',
            icon: <FaCertificate />,
            color: '#6366f1',
            credentialId: 'NS-FSWD-2023',
            link: 'https://www.newtonschool.co/',
            skills: ['Full Stack', 'React.js', 'Node.js', 'MySQL'],
        },
        {
            id: 4,
            name: 'Data Visualization',
            issuer: 'freeCodeCamp',
            date: 'Completed',
            icon: <FaCertificate />,
            color: '#0a0a23',
            credentialId: 'FCC-DV-2023',
            link: 'https://www.freecodecamp.org/certification',
            skills: ['D3.js', 'Chart.js', 'Data Analysis', 'Visualization'],
        },
    ];

    const additionalCerts = [
        'Responsive Web Design',
        'API Development',
        'Docker Fundamentals',
        'AWS Cloud Practitioner',
        'Agile & Scrum Methodology',
        'Git Version Control',
    ];

    return (
        <section id="certifications" className="certifications-section">
            <Container>
                <div className="section-title" data-aos="fade-up">
                    <span className="section-subtitle">My Credentials</span>
                    <h2>Certifications</h2>
                    <p>Professional certifications validating my technical expertise</p>
                </div>

                <Row>
                    {certifications.map((cert, index) => (
                        <Col lg={6} key={cert.id} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="cert-card">
                                <div className="cert-icon-wrapper" style={{ '--cert-color': cert.color }}>
                                    <div className="cert-icon">{cert.icon}</div>
                                </div>

                                <div className="cert-content">
                                    <h3 className="cert-name">{cert.name}</h3>
                                    <p className="cert-issuer">{cert.issuer}</p>

                                    <div className="cert-meta">
                                        <span className="meta-item">
                                            <FaCalendarAlt />
                                            {cert.date}
                                        </span>
                                        <span className="meta-item">
                                            <FaAward />
                                            {cert.credentialId}
                                        </span>
                                    </div>

                                    <div className="cert-skills">
                                        {cert.skills.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>

                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                        <FaExternalLinkAlt /> Verify Credential
                                    </a>
                                </div>

                                <div className="cert-badge">
                                    <FaCertificate />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Additional Certifications */}
                <Row className="mt-5">
                    <Col lg={12} data-aos="fade-up">
                        <div className="additional-certs">
                            <h3>Other Certifications & Training</h3>
                            <div className="certs-list">
                                {additionalCerts.map((cert, index) => (
                                    <div key={index} className="cert-item">
                                        <FaCertificate className="cert-item-icon" />
                                        <span>{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Certifications;

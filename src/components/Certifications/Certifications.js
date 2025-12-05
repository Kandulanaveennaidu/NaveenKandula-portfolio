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
            name: 'AWS Certified Solutions Architect - Associate',
            issuer: 'Amazon Web Services',
            date: 'March 2023',
            icon: <SiAmazonwebservices />,
            color: '#ff9900',
            credentialId: 'AWS-SA-2023-XXXXX',
            link: 'https://aws.amazon.com/certification/',
            skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Networking'],
        },
        {
            id: 2,
            name: 'Microsoft Certified: Azure Developer Associate',
            issuer: 'Microsoft',
            date: 'January 2023',
            icon: <FaMicrosoft />,
            color: '#0078d4',
            credentialId: 'AZURE-DEV-2023-XXXXX',
            link: 'https://learn.microsoft.com/en-us/certifications/',
            skills: ['Azure Services', 'Cloud Development', 'DevOps', 'Containers'],
        },
        {
            id: 3,
            name: 'Oracle Certified Professional: Java SE 11 Developer',
            issuer: 'Oracle',
            date: 'September 2022',
            icon: <SiOracle />,
            color: '#f80000',
            credentialId: 'ORACLE-JAVA-2022-XXXXX',
            link: 'https://education.oracle.com/',
            skills: ['Java SE 11', 'OOP', 'Functional Programming', 'Modules'],
        },
        {
            id: 4,
            name: 'Spring Professional Certification',
            issuer: 'VMware',
            date: 'July 2022',
            icon: <SiSpring />,
            color: '#6db33f',
            credentialId: 'SPRING-PROF-2022-XXXXX',
            link: 'https://spring.io/training',
            skills: ['Spring Framework', 'Spring Boot', 'Spring Security', 'Spring Data'],
        },
    ];

    const additionalCerts = [
        'Docker Certified Associate',
        'Kubernetes Administrator (CKA)',
        'MongoDB Certified Developer',
        'Agile Scrum Master Certification',
        'Jenkins Certified Engineer',
        'React Developer Certification',
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

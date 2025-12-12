import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "Bachelor of Commerce",
            institution: 'Osmania University',
            location: 'Hyderabad, Telangana',
            duration: 'Jun 2019 - May 2023',
            grade: 'Accounting and Finance',
            description: 'Specialized in Accounting and Finance with a strong foundation in business principles, financial management, and analytical skills that complement technical expertise.',
            achievements: [
                'Strong foundation in business analytics',
                'Financial data analysis and reporting',
                'Project management fundamentals',
                'Team collaboration and leadership',
            ],
        },
    ];

    return (
        <section id="education" className="education-section">
            <Container>
                <div className="section-title" data-aos="fade-up">
                    <span className="section-subtitle">My Background</span>
                    <h2>Education</h2>
                    <p>Academic journey that shaped my technical expertise</p>
                </div>

                <Row className="justify-content-center">
                    {educationData.map((edu, index) => (
                        <Col lg={6} key={edu.id} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="education-card">
                                <div className="edu-header">
                                    <div className="edu-icon">
                                        <FaGraduationCap />
                                    </div>
                                    <div className="edu-badge">{edu.grade}</div>
                                </div>

                                <h3 className="edu-degree">{edu.degree}</h3>
                                <h4 className="edu-institution">{edu.institution}</h4>

                                <div className="edu-meta">
                                    <span className="meta-item">
                                        <FaCalendarAlt />
                                        {edu.duration}
                                    </span>
                                    <span className="meta-item">
                                        <FaMapMarkerAlt />
                                        {edu.location}
                                    </span>
                                </div>

                                <p className="edu-description">{edu.description}</p>

                                <div className="edu-achievements">
                                    <h5><FaTrophy /> Achievements</h5>
                                    <ul>
                                        {edu.achievements.map((achievement, idx) => (
                                            <li key={idx}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Additional Courses */}
                <Row className="mt-5">
                    <Col lg={12} data-aos="fade-up">
                        <div className="courses-section">
                            <h3>Key Skills Developed</h3>
                            <div className="courses-grid">
                                <div className="course-item">Web Development</div>
                                <div className="course-item">React.js & Redux</div>
                                <div className="course-item">Node.js & Express</div>
                                <div className="course-item">Database Management</div>
                                <div className="course-item">RESTful API Design</div>
                                <div className="course-item">Cloud Computing (AWS)</div>
                                <div className="course-item">DevOps & CI/CD</div>
                                <div className="course-item">Performance Optimization</div>
                                <div className="course-item">Agile Methodologies</div>
                                <div className="course-item">UI/UX Principles</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Education;

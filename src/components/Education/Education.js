import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "Master's in Computer Science",
            institution: 'University of Technology',
            location: 'Hyderabad, India',
            duration: '2017 - 2019',
            grade: 'CGPA: 8.5/10',
            description: 'Specialized in Software Engineering and Cloud Computing. Completed thesis on Microservices Architecture Optimization.',
            achievements: [
                'Graduate Research Assistant',
                'Published 2 research papers',
                'Dean\'s List for Academic Excellence',
                'Best Project Award - Cloud Computing',
            ],
        },
        {
            id: 2,
            degree: "Bachelor's in Computer Science",
            institution: 'National Institute of Technology',
            location: 'Bangalore, India',
            duration: '2013 - 2017',
            grade: 'CGPA: 8.2/10',
            description: 'Focused on core computer science fundamentals, data structures, algorithms, and software development methodologies.',
            achievements: [
                'Technical Club President',
                'Winner - National Coding Competition',
                'Completed 5+ internship projects',
                'Student Ambassador',
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
                            <h3>Relevant Coursework</h3>
                            <div className="courses-grid">
                                <div className="course-item">Data Structures & Algorithms</div>
                                <div className="course-item">Database Management Systems</div>
                                <div className="course-item">Software Engineering</div>
                                <div className="course-item">Cloud Computing</div>
                                <div className="course-item">Distributed Systems</div>
                                <div className="course-item">Machine Learning</div>
                                <div className="course-item">Computer Networks</div>
                                <div className="course-item">Operating Systems</div>
                                <div className="course-item">Web Technologies</div>
                                <div className="course-item">Cybersecurity</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Education;

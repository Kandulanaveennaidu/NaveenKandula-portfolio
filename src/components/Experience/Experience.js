import React from 'react';
import { Container } from 'react-bootstrap';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Full Stack Developer',
            company: 'Infosys Technologies',
            location: 'Hyderabad, India',
            duration: 'Jan 2022 - Present',
            type: 'Full-time',
            description: 'Working as a Full Stack Developer on enterprise-level applications using cutting-edge technologies.',
            responsibilities: [
                'Developed and maintained RESTful APIs using Java Spring Boot, improving API response time by 40%',
                'Implemented microservices architecture handling 10,000+ daily transactions',
                'Built responsive React.js dashboards with Redux for state management',
                'Deployed applications on AWS using Docker and Kubernetes',
                'Integrated Apache Kafka for real-time event streaming',
                'Collaborated with cross-functional teams in Agile/Scrum environment',
                'Mentored junior developers and conducted code reviews',
            ],
            technologies: ['Java', 'Spring Boot', 'React.js', 'AWS', 'Docker', 'Kubernetes', 'Kafka', 'MySQL'],
        },
        {
            id: 2,
            role: 'Java Developer',
            company: 'Tech Solutions Pvt Ltd',
            location: 'Bangalore, India',
            duration: 'Jun 2019 - Dec 2021',
            type: 'Full-time',
            description: 'Worked on developing scalable backend services and database optimization.',
            responsibilities: [
                'Designed and developed RESTful web services using Spring Boot and Hibernate',
                'Optimized database queries resulting in 50% improvement in performance',
                'Implemented OAuth 2.0 and JWT-based authentication systems',
                'Created automated testing suites using JUnit and Mockito',
                'Participated in database schema design and optimization',
                'Integrated third-party APIs and payment gateways',
                'Worked on CI/CD pipeline implementation using Jenkins',
            ],
            technologies: ['Java', 'Spring MVC', 'Hibernate', 'PostgreSQL', 'Jenkins', 'JUnit', 'Maven'],
        },
        {
            id: 3,
            role: 'Software Developer Intern',
            company: 'StartUp Tech',
            location: 'Chennai, India',
            duration: 'Jan 2019 - May 2019',
            type: 'Internship',
            description: 'Gained hands-on experience in full-stack development during internship.',
            responsibilities: [
                'Developed frontend components using React.js and Material UI',
                'Assisted in backend API development using Node.js and Express',
                'Worked on MongoDB database design and queries',
                'Participated in daily stand-ups and sprint planning',
                'Created technical documentation for developed features',
            ],
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Git'],
        },
    ];

    return (
        <section id="experience" className="experience-section">
            <Container>
                <div className="section-title" data-aos="fade-up">
                    <span className="section-subtitle">My Journey</span>
                    <h2>Work Experience</h2>
                    <p>Building exceptional digital experiences through every role</p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                        >
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div className="timeline-icon">
                                        <FaBriefcase />
                                    </div>
                                    <div className="timeline-badge">{exp.type}</div>
                                </div>

                                <h3 className="timeline-role">{exp.role}</h3>
                                <h4 className="timeline-company">{exp.company}</h4>

                                <div className="timeline-meta">
                                    <span className="meta-item">
                                        <FaCalendarAlt />
                                        {exp.duration}
                                    </span>
                                    <span className="meta-item">
                                        <FaMapMarkerAlt />
                                        {exp.location}
                                    </span>
                                </div>

                                <p className="timeline-description">{exp.description}</p>

                                <div className="timeline-responsibilities">
                                    <h5>Key Responsibilities:</h5>
                                    <ul>
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx}>
                                                <FaCheckCircle className="check-icon" />
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="timeline-technologies">
                                    {exp.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="timeline-line"></div>
                </div>
            </Container>
        </section>
    );
};

export default Experience;

import React from 'react';
import { Container } from 'react-bootstrap';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Full Stack Developer',
            company: 'Vitelglobal Communication',
            location: 'Hyderabad, India',
            duration: 'Oct 2024 - Present',
            type: 'Full-time',
            description: 'Architecting enterprise-grade applications using cutting-edge technologies for global communication solutions.',
            responsibilities: [
                'Architect enterprise-grade applications using React.js, Redux, Node.js, MySQL, Docker, and AWS S3, improving application performance by 30% and scalability',
                'Develop responsive, cross-browser-compatible front-end interfaces with Bootstrap, enhancing user engagement by 40% through third-party API integrations',
                'Implement CI/CD pipelines with Docker, reducing deployment times by 60% and ensuring consistent development environments',
                'Optimize database queries and API endpoints, achieving 45% faster response times and increased throughput',
                'Collaborate with UX/UI designers using Figma to deliver pixel-perfect, responsive interfaces',
            ],
            technologies: ['React.js', 'Redux', 'Node.js', 'MySQL', 'Docker', 'AWS S3', 'Bootstrap', 'Figma'],
        },
        {
            id: 2,
            role: 'Full Stack Developer',
            company: 'ATTPL Group',
            location: 'Ahmedabad, Gujarat, India',
            duration: 'Dec 2022 - Sep 2024',
            type: 'Full-time',
            description: 'Led end-to-end development of web applications and optimized performance for enterprise clients.',
            responsibilities: [
                'Led end-to-end development of web applications using React.js, Node.js, and MySQL, boosting operational efficiency by 35%',
                'Designed responsive interfaces with Bootstrap and custom CSS, ensuring seamless functionality across desktop and mobile platforms',
                'Built RESTful APIs and optimized database performance, reducing page load times by 40%',
                'Participated in agile workflows, including sprint planning and daily stand-ups, consistently meeting project deadlines',
                'Created detailed documentation, reducing onboarding time for new developers by 50%',
            ],
            technologies: ['React.js', 'Node.js', 'MySQL', 'Bootstrap', 'RESTful APIs', 'Git', 'CSS3'],
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

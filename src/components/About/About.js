import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter';
import { FaCode, FaLaptopCode, FaUsers, FaCoffee } from 'react-icons/fa';
import { HiLightningBolt, HiAcademicCap, HiGlobe, HiCube } from 'react-icons/hi';
import './About.css';

const About = () => {
    const stats = [
        { icon: <FaCode />, count: 5, suffix: '+', label: 'Years Experience' },
        { icon: <FaLaptopCode />, count: 50, suffix: '+', label: 'Projects Completed' },
        { icon: <FaUsers />, count: 30, suffix: '+', label: 'Happy Clients' },
        { icon: <FaCoffee />, count: 1000, suffix: '+', label: 'Cups of Coffee' },
    ];

    const highlights = [
        { icon: <HiLightningBolt />, title: 'Fast Learner', desc: 'Quick to adapt to new technologies' },
        { icon: <HiAcademicCap />, title: 'Detail Oriented', desc: 'Precision in every line of code' },
        { icon: <HiGlobe />, title: 'Global Perspective', desc: 'Experience with international teams' },
        { icon: <HiCube />, title: 'Problem Solver', desc: 'Creative solutions for complex challenges' },
    ];

    return (
        <section id="about" className="about-section">
            <Container>
                <div className="section-title" data-aos="fade-up">
                    <span className="section-subtitle">Get To Know</span>
                    <h2>About Me</h2>
                    <p>Passionate developer dedicated to creating impactful digital experiences</p>
                </div>

                <Row className="align-items-center">
                    <Col lg={5} className="mb-5 mb-lg-0" data-aos="fade-right">
                        <div className="about-image-wrapper">
                            <div className="about-image-container">
                                <div className="about-avatar">
                                    <span className="about-initials">AK</span>
                                </div>
                                <div className="experience-badge">
                                    <span className="exp-number">5+</span>
                                    <span className="exp-text">Years of Experience</span>
                                </div>
                            </div>
                            <div className="about-shape-1"></div>
                            <div className="about-shape-2"></div>
                        </div>
                    </Col>

                    <Col lg={7} data-aos="fade-left">
                        <div className="about-content">
                            <h3 className="about-greeting">
                                Hello! I'm <span className="gradient-text">Aishwarya</span>
                            </h3>
                            <p className="about-text">
                                I am a dedicated and results-driven Full Stack Developer with over 5 years of comprehensive
                                experience in designing, developing, and deploying scalable web applications. My expertise
                                spans across Java, Spring Boot, React.js, and cloud technologies including AWS and Azure.
                            </p>
                            <p className="about-text">
                                With a strong foundation in both frontend and backend development, I specialize in building
                                robust microservices architecture, implementing CI/CD pipelines, and creating intuitive user
                                interfaces. I am passionate about writing clean, maintainable code and following best practices
                                in software development.
                            </p>
                            <p className="about-text">
                                Throughout my career, I have successfully collaborated with cross-functional teams to deliver
                                high-quality software solutions that meet business requirements while ensuring optimal performance
                                and user experience.
                            </p>

                            <div className="highlights-grid">
                                {highlights.map((item, index) => (
                                    <div key={index} className="highlight-item" data-aos="zoom-in" data-aos-delay={index * 100}>
                                        <div className="highlight-icon">{item.icon}</div>
                                        <div className="highlight-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="stats-row mt-5">
                    {stats.map((stat, index) => (
                        <Col md={6} lg={3} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="stat-card">
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-number">
                                    <AnimatedCounter end={stat.count} duration={2.5} suffix={stat.suffix} />
                                </div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default About;

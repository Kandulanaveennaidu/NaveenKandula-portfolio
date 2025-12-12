import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter';
import { FaCode, FaLaptopCode, FaUsers, FaCoffee } from 'react-icons/fa';
import { HiLightningBolt, HiAcademicCap, HiGlobe, HiCube } from 'react-icons/hi';
import './About.css';

const About = () => {
    const stats = [
        { icon: <FaCode />, count: 3, suffix: '+', label: 'Years Experience' },
        { icon: <FaLaptopCode />, count: 10, suffix: '+', label: 'Projects Completed' },
        { icon: <FaUsers />, count: 50000, suffix: '+', label: 'Users Served' },
        { icon: <FaCoffee />, count: 45, suffix: '%', label: 'Efficiency Improved' },
    ];

    const highlights = [
        { icon: <HiLightningBolt />, title: 'Performance Optimizer', desc: 'Improved app performance by 30%' },
        { icon: <HiAcademicCap />, title: 'API Expert', desc: 'Third-party API integrations specialist' },
        { icon: <HiGlobe />, title: 'Scalable Solutions', desc: '100,000+ daily interactions handled' },
        { icon: <HiCube />, title: 'CI/CD Expert', desc: 'Reduced deployment times by 60%' },
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
                                    <img src="/image.png" alt="Naveen Kandula" className="about-image" />
                                </div>
                                <div className="experience-badge">
                                    <span className="exp-number">3+</span>
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
                                Hello! I'm <span className="gradient-text">Kandula Naveen</span>
                            </h3>
                            <p className="about-text">
                                I am a dynamic and results-driven Full Stack Developer with over 3 years of comprehensive
                                experience in designing, developing, and deploying scalable web applications. My expertise
                                spans across React.js, Redux, Node.js, MySQL, Docker, and AWS cloud technologies.
                            </p>
                            <p className="about-text">
                                With a strong foundation in both frontend and backend development, I specialize in building
                                enterprise-grade applications, implementing CI/CD pipelines, and creating intuitive user
                                interfaces. I am passionate about writing clean, maintainable code and following best practices
                                that improve performance by up to 45%.
                            </p>
                            <p className="about-text">
                                Throughout my career at Vitelglobal Communication and ATTPL Group, I have successfully
                                collaborated with cross-functional teams to deliver high-quality software solutions including
                                WebRTC platforms supporting 50,000+ concurrent users with 99.9% uptime.
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

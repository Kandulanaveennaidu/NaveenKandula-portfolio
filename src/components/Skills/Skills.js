import React, { useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import {
    FaJava, FaPython, FaReact, FaAngular, FaNodeJs, FaAws, FaDocker, FaGitAlt,
    FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaLinux, FaJenkins, FaMicrosoft
} from 'react-icons/fa';
import {
    SiSpringboot, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiKubernetes,
    SiTerraform, SiApachekafka, SiGraphql, SiTypescript, SiBootstrap,
    SiJira, SiSonarqube, SiHibernate, SiApachetomcat
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Skills' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'database', name: 'Database' },
        { id: 'devops', name: 'DevOps & Cloud' },
        { id: 'tools', name: 'Tools' },
    ];

    const skills = [
        // Frontend
        { name: 'React.js', icon: <FaReact />, level: 95, category: 'frontend', color: '#61dafb' },
        { name: 'Redux', icon: <FaReact />, level: 90, category: 'frontend', color: '#764abc' },
        { name: 'JavaScript', icon: <FaJs />, level: 92, category: 'frontend', color: '#f7df1e' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, category: 'frontend', color: '#e34f26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, category: 'frontend', color: '#1572b6' },
        { name: 'Bootstrap', icon: <SiBootstrap />, level: 90, category: 'frontend', color: '#7952b3' },
        { name: 'Chart.js', icon: <FaJs />, level: 85, category: 'frontend', color: '#ff6384' },
        { name: 'Java', icon: <FaJava />, level: 75, category: 'frontend', color: '#f89820' },
        { name: '.NET', icon: <FaMicrosoft />, level: 70, category: 'frontend', color: '#512bd4' },

        // Backend
        { name: 'Node.js', icon: <FaNodeJs />, level: 90, category: 'backend', color: '#68a063' },
        { name: 'Express.js', icon: <FaNodeJs />, level: 88, category: 'backend', color: '#000000' },
        { name: 'RESTful APIs', icon: <SiGraphql />, level: 92, category: 'backend', color: '#e535ab' },
        { name: 'WebRTC', icon: <FaNodeJs />, level: 85, category: 'backend', color: '#333333' },

        // Database
        { name: 'MySQL', icon: <SiMysql />, level: 90, category: 'database', color: '#4479a1' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 75, category: 'database', color: '#47a248' },

        // DevOps & Cloud
        { name: 'Docker', icon: <FaDocker />, level: 88, category: 'devops', color: '#2496ed' },
        { name: 'AWS S3', icon: <FaAws />, level: 85, category: 'devops', color: '#ff9900' },
        { name: 'CI/CD', icon: <FaJenkins />, level: 85, category: 'devops', color: '#d24939' },
        { name: 'Git', icon: <FaGitAlt />, level: 92, category: 'devops', color: '#f05032' },

        // Tools
        { name: 'Figma', icon: <SiJira />, level: 85, category: 'tools', color: '#f24e1e' },
        { name: 'Postman', icon: <SiJira />, level: 90, category: 'tools', color: '#ff6c37' },
        { name: 'Jira', icon: <SiJira />, level: 88, category: 'tools', color: '#0052cc' },
        { name: 'Agile', icon: <SiJira />, level: 90, category: 'tools', color: '#0052cc' },
    ];

    const filteredSkills = activeCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="skills-section">
            <Container>
                <div className="section-title" data-aos="fade-up">
                    <span className="section-subtitle">What I Know</span>
                    <h2>Technical Skills</h2>
                    <p>A comprehensive toolkit for building modern, scalable applications</p>
                </div>

                <div className="skills-filter" data-aos="fade-up">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <Row className="skills-grid">
                    {filteredSkills.map((skill, index) => (
                        <Col lg={4} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                            <div className="skill-card">
                                <div className="skill-header">
                                    <div className="skill-icon" style={{ color: skill.color }}>
                                        {skill.icon}
                                    </div>
                                    <div className="skill-info">
                                        <h4>{skill.name}</h4>
                                        <span className="skill-level">{skill.level}%</span>
                                    </div>
                                </div>
                                <div className="skill-progress">
                                    <ProgressBar
                                        now={skill.level}
                                        style={{
                                            '--skill-color': skill.color,
                                            height: '8px',
                                            backgroundColor: 'rgba(255,255,255,0.1)'
                                        }}
                                    />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Row className="mt-5">
                    <Col lg={12} data-aos="fade-up">
                        <div className="skills-summary">
                            <h3>Core Competencies</h3>
                            <div className="competencies-grid">
                                <div className="competency-item">
                                    <div className="competency-icon">🎨</div>
                                    <h4>Responsive Design</h4>
                                    <p>Creating pixel-perfect, cross-browser-compatible interfaces with Bootstrap and custom CSS</p>
                                </div>
                                <div className="competency-item">
                                    <div className="competency-icon">🔗</div>
                                    <h4>API Integration</h4>
                                    <p>Integrating third-party APIs including WhatsApp, SMS, Telegram for seamless communication</p>
                                </div>
                                <div className="competency-item">
                                    <div className="competency-icon">⚡</div>
                                    <h4>Performance Optimization</h4>
                                    <p>Optimizing database queries and API endpoints, achieving 45% faster response times</p>
                                </div>
                                <div className="competency-item">
                                    <div className="competency-icon">🌐</div>
                                    <h4>Cross-Browser Compatibility</h4>
                                    <p>Ensuring seamless functionality across all desktop and mobile platforms</p>
                                </div>
                                <div className="competency-item">
                                    <div className="competency-icon">🔄</div>
                                    <h4>Agile Development</h4>
                                    <p>Working effectively in Agile/Scrum environments with sprint planning and daily stand-ups</p>
                                </div>
                                <div className="competency-item">
                                    <div className="competency-icon">📹</div>
                                    <h4>WebRTC Solutions</h4>
                                    <p>Building real-time communication platforms supporting 50,000+ concurrent users</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;

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
        // Backend
        { name: 'Java', icon: <FaJava />, level: 95, category: 'backend', color: '#f89820' },
        { name: 'Spring Boot', icon: <SiSpringboot />, level: 90, category: 'backend', color: '#6db33f' },
        { name: 'Hibernate', icon: <SiHibernate />, level: 85, category: 'backend', color: '#59666c' },
        { name: 'Python', icon: <FaPython />, level: 75, category: 'backend', color: '#3776ab' },
        { name: 'Node.js', icon: <FaNodeJs />, level: 80, category: 'backend', color: '#68a063' },
        { name: 'GraphQL', icon: <SiGraphql />, level: 75, category: 'backend', color: '#e535ab' },

        // Frontend
        { name: 'React.js', icon: <FaReact />, level: 90, category: 'frontend', color: '#61dafb' },
        { name: 'Angular', icon: <FaAngular />, level: 80, category: 'frontend', color: '#dd0031' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, category: 'frontend', color: '#3178c6' },
        { name: 'JavaScript', icon: <FaJs />, level: 90, category: 'frontend', color: '#f7df1e' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, category: 'frontend', color: '#e34f26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, category: 'frontend', color: '#1572b6' },
        { name: 'Bootstrap', icon: <SiBootstrap />, level: 90, category: 'frontend', color: '#7952b3' },

        // Database
        { name: 'MySQL', icon: <SiMysql />, level: 90, category: 'database', color: '#4479a1' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85, category: 'database', color: '#336791' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85, category: 'database', color: '#47a248' },
        { name: 'Redis', icon: <SiRedis />, level: 80, category: 'database', color: '#dc382d' },
        { name: 'Oracle', icon: <FaDatabase />, level: 80, category: 'database', color: '#f80000' },

        // DevOps & Cloud
        { name: 'AWS', icon: <FaAws />, level: 85, category: 'devops', color: '#ff9900' },
        { name: 'Azure', icon: <FaMicrosoft />, level: 80, category: 'devops', color: '#0078d4' },
        { name: 'Docker', icon: <FaDocker />, level: 90, category: 'devops', color: '#2496ed' },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 80, category: 'devops', color: '#326ce5' },
        { name: 'Jenkins', icon: <FaJenkins />, level: 85, category: 'devops', color: '#d24939' },
        { name: 'Terraform', icon: <SiTerraform />, level: 75, category: 'devops', color: '#7b42bc' },
        { name: 'Linux', icon: <FaLinux />, level: 85, category: 'devops', color: '#fcc624' },

        // Tools
        { name: 'Git', icon: <FaGitAlt />, level: 95, category: 'tools', color: '#f05032' },
        { name: 'Kafka', icon: <SiApachekafka />, level: 80, category: 'tools', color: '#231f20' },
        { name: 'Jira', icon: <SiJira />, level: 90, category: 'tools', color: '#0052cc' },
        { name: 'SonarQube', icon: <SiSonarqube />, level: 75, category: 'tools', color: '#4e9bcd' },
        { name: 'Tomcat', icon: <SiApachetomcat />, level: 85, category: 'tools', color: '#f8dc75' },
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
                                    <div className="competency-icon">🏗️</div>
                                    <h4>Microservices Architecture</h4>
                                    <p>Designing and implementing scalable microservices using Spring Boot, Docker, and Kubernetes</p>
                                </div>
                                <div className="competency-item">
                                    <div className="competency-icon">⚡</div>
                                    <h4>RESTful API Development</h4>
                                    <p>Building robust and secure REST APIs with proper documentation and best practices</p>
                                </div>
                                <div className="competency-item">
                                    <div className="competency-icon">🎨</div>
                                    <h4>Frontend Development</h4>
                                    <p>Creating responsive and intuitive user interfaces using React.js and modern CSS frameworks</p>
                                </div>
                                <div className="competency-item">
                                    <div className="competency-icon">☁️</div>
                                    <h4>Cloud Solutions</h4>
                                    <p>Deploying and managing applications on AWS and Azure with CI/CD pipelines</p>
                                </div>
                                <div className="competency-item">
                                    <div className="competency-icon">🔄</div>
                                    <h4>Agile Development</h4>
                                    <p>Working effectively in Agile/Scrum environments with continuous delivery practices</p>
                                </div>
                                <div className="competency-item">
                                    <div className="competency-icon">🔒</div>
                                    <h4>Security Best Practices</h4>
                                    <p>Implementing OAuth, JWT authentication, and following OWASP security guidelines</p>
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

import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', name: 'All Projects' },
        { id: 'fullstack', name: 'Full Stack' },
        { id: 'backend', name: 'Backend' },
        { id: 'frontend', name: 'Frontend' },
    ];

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'fullstack',
            shortDesc: 'Complete e-commerce solution with payment integration',
            description: 'A full-featured e-commerce platform built with microservices architecture. Includes user authentication, product catalog, shopping cart, order management, and payment processing.',
            image: '🛒',
            technologies: ['Java', 'Spring Boot', 'React.js', 'Redux', 'MySQL', 'Docker', 'AWS', 'Stripe'],
            features: [
                'Microservices architecture with Spring Cloud',
                'Real-time inventory management',
                'Secure payment processing with Stripe',
                'Admin dashboard for order management',
                'JWT-based authentication',
                'Redis caching for improved performance',
            ],
            github: 'https://github.com/aishwarya/ecommerce-platform',
            live: '#',
        },
        {
            id: 2,
            title: 'Banking Management System',
            category: 'backend',
            shortDesc: 'Secure banking application with transaction management',
            description: 'A comprehensive banking system that handles account management, fund transfers, transaction history, and statement generation with robust security measures.',
            image: '🏦',
            technologies: ['Java', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'Spring Security', 'JUnit'],
            features: [
                'Multi-factor authentication',
                'Real-time transaction processing',
                'Automated statement generation',
                'Fraud detection algorithms',
                'RESTful API design',
                'Comprehensive audit logging',
            ],
            github: 'https://github.com/aishwarya/banking-system',
            live: '#',
        },
        {
            id: 3,
            title: 'Healthcare Portal',
            category: 'fullstack',
            shortDesc: 'Patient management and appointment scheduling system',
            description: 'A healthcare management portal that enables patients to book appointments, access medical records, and communicate with healthcare providers.',
            image: '🏥',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'AWS'],
            features: [
                'Online appointment booking',
                'Electronic health records (EHR)',
                'Real-time chat with doctors',
                'Prescription management',
                'Video consultation integration',
                'HIPAA compliant security',
            ],
            github: 'https://github.com/aishwarya/healthcare-portal',
            live: '#',
        },
        {
            id: 4,
            title: 'Task Management Dashboard',
            category: 'frontend',
            shortDesc: 'Kanban-style project management application',
            description: 'An intuitive task management dashboard with drag-and-drop functionality, team collaboration features, and progress tracking.',
            image: '📊',
            technologies: ['React.js', 'TypeScript', 'Redux Toolkit', 'Material UI', 'Chart.js'],
            features: [
                'Drag-and-drop task organization',
                'Real-time collaboration',
                'Progress analytics and charts',
                'Custom workflow creation',
                'Time tracking integration',
                'Email notifications',
            ],
            github: 'https://github.com/aishwarya/task-dashboard',
            live: '#',
        },
        {
            id: 5,
            title: 'API Gateway Service',
            category: 'backend',
            shortDesc: 'Centralized API management with rate limiting',
            description: 'A robust API gateway service that handles request routing, rate limiting, authentication, and monitoring for microservices.',
            image: '🔗',
            technologies: ['Java', 'Spring Cloud Gateway', 'Redis', 'Kafka', 'Prometheus', 'Grafana'],
            features: [
                'Dynamic routing configuration',
                'Rate limiting and throttling',
                'Circuit breaker pattern',
                'Request/response logging',
                'Metrics and monitoring',
                'Load balancing',
            ],
            github: 'https://github.com/aishwarya/api-gateway',
            live: '#',
        },
        {
            id: 6,
            title: 'Real-time Chat Application',
            category: 'fullstack',
            shortDesc: 'Scalable messaging platform with group chat',
            description: 'A real-time messaging application supporting one-on-one and group chats with file sharing, message encryption, and user presence.',
            image: '💬',
            technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'Docker'],
            features: [
                'Real-time messaging',
                'Group chat functionality',
                'File and media sharing',
                'End-to-end encryption',
                'User online status',
                'Message search and history',
            ],
            github: 'https://github.com/aishwarya/chat-app',
            live: '#',
        },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    return (
        <section id="projects" className="projects-section">
            <Container>
                <div className="section-title" data-aos="fade-up">
                    <span className="section-subtitle">My Work</span>
                    <h2>Featured Projects</h2>
                    <p>Showcasing my best work and technical expertise</p>
                </div>

                <div className="projects-filter" data-aos="fade-up">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                <Row className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <Col lg={4} md={6} key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="project-card">
                                <div className="project-image">
                                    <span className="project-emoji">{project.image}</span>
                                    <div className="project-overlay">
                                        <button
                                            className="overlay-btn"
                                            onClick={() => handleProjectClick(project)}
                                        >
                                            <FaEye /> View Details
                                        </button>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <span className="project-category">{project.category}</span>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.shortDesc}</p>
                                    <div className="project-tech">
                                        {project.technologies.slice(0, 4).map((tech, idx) => (
                                            <span key={idx} className="tech-badge">{tech}</span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="tech-badge more">+{project.technologies.length - 4}</span>
                                        )}
                                    </div>
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaGithub /> Code
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link primary">
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Project Modal */}
                <Modal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    size="lg"
                    centered
                    className="project-modal"
                >
                    {selectedProject && (
                        <>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    <span className="modal-emoji">{selectedProject.image}</span>
                                    {selectedProject.title}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p className="modal-description">{selectedProject.description}</p>

                                <div className="modal-section">
                                    <h5><FaCode /> Technologies Used</h5>
                                    <div className="modal-tech">
                                        {selectedProject.technologies.map((tech, idx) => (
                                            <span key={idx} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="modal-section">
                                    <h5>✨ Key Features</h5>
                                    <ul className="modal-features">
                                        {selectedProject.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="modal-links">
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary-custom">
                                        <FaGithub /> View Source Code
                                    </a>
                                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn-primary-custom">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </Modal.Body>
                        </>
                    )}
                </Modal>
            </Container>
        </section>
    );
};

export default Projects;

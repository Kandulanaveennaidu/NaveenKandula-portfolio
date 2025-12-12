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
            title: 'Vitel Meet - Video Conferencing',
            category: 'fullstack',
            shortDesc: 'WebRTC-based video conferencing platform with 50,000+ concurrent users',
            description: 'Architected a comprehensive WebRTC-based video conferencing platform supporting massive concurrent user loads with enterprise-grade security and reliability. Features include real-time video/audio, screen sharing, and seamless collaboration tools.',
            image: '/vitelmeet.png',
            technologies: ['React.js', 'Node.js', 'WebRTC', 'Redux', 'MySQL', 'AWS', 'Docker', 'Socket.io'],
            features: [
                'WebRTC-based real-time video and audio communication',
                'Support for 50,000+ concurrent users with 99.9% uptime',
                'End-to-end encryption for secure communications',
                'Real-time messaging and screen-sharing features',
                'Network optimization reducing latency by 25%',
                'Scalable architecture with load balancing',
            ],
            github: 'https://github.com/Kandulanaveennaidu',
            live: 'https://vitelmeet.vitelglobal.com/',
        },
        {
            id: 2,
            title: 'Omni-Channel Platform',
            category: 'fullstack',
            shortDesc: 'Scalable platform integrating WhatsApp, SMS, and Telegram APIs',
            description: 'Developed a unified communication platform that seamlessly integrates multiple messaging channels to improve customer engagement and response times. Complete digital CX platform for streamlined communications.',
            image: '/omni.png',
            technologies: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MySQL', 'WhatsApp API', 'Telegram API', 'SMS API'],
            features: [
                'Integration with WhatsApp, SMS, and Telegram APIs',
                'Improved customer response times by 40%',
                'Responsive front-end built with React.js and Redux',
                'Node.js backend handling 100,000+ daily interactions',
                'Real-time message synchronization across channels',
                'Analytics dashboard for customer engagement metrics',
            ],
            github: 'https://github.com/Kandulanaveennaidu',
            live: 'https://omni-channel.vitelglobal.com/',
        },
        {
            id: 3,
            title: 'ATTPL - Election Management System',
            category: 'fullstack',
            shortDesc: 'Secure platform for voter registration and real-time result tabulation',
            description: 'Developed a secure and scalable election management system handling large-scale voter data with real-time analytics and visualization capabilities. Comprehensive solution for candidates and election management.',
            image: '/attpl.png',
            technologies: ['React.js', 'Node.js', 'MySQL', 'Chart.js', 'Bootstrap', 'Express.js', 'JWT'],
            features: [
                'Secure voter registration system handling 500,000+ voters',
                'Real-time result tabulation and display',
                'Chart.js-based data visualizations for stakeholder analytics',
                'Improved stakeholder analytics by 45%',
                'Role-based access control and security',
                'Mobile-responsive design for field workers',
            ],
            github: 'https://github.com/Kandulanaveennaidu',
            live: 'https://www.ems.attpl.com/',
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
                                    <img src={project.image} alt={project.title} className="project-screenshot" />
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
                                    <img src={selectedProject.image} alt={selectedProject.title} className="modal-project-img" />
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

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCalendarAlt, FaArrowRight, FaClock, FaTags } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Building Scalable WebRTC Applications with React',
            excerpt: 'Learn how to architect WebRTC-based video conferencing platforms that can handle 50,000+ concurrent users with optimal performance.',
            date: 'Dec 2024',
            readTime: '8 min read',
            category: 'WebRTC',
            image: null,
            link: '#',
        },
        {
            id: 2,
            title: 'Optimizing React Performance: Lessons from Production',
            excerpt: 'Discover practical techniques I used to improve application performance by 45% through code splitting, memoization, and smart state management.',
            date: 'Nov 2024',
            readTime: '6 min read',
            category: 'React.js',
            image: null,
            link: '#',
        },
        {
            id: 3,
            title: 'CI/CD Best Practices with Docker and AWS',
            excerpt: 'A comprehensive guide to implementing CI/CD pipelines that reduced our deployment times by 60% using Docker containers and AWS services.',
            date: 'Oct 2024',
            readTime: '10 min read',
            category: 'DevOps',
            image: null,
            link: '#',
        },
    ];

    return (
        <section id="blog" className="blog-section">
            <Container>
                <div className="section-title" data-aos="fade-up">
                    <span className="section-subtitle">My Articles</span>
                    <h2>Latest Blog Posts</h2>
                    <p>Sharing knowledge and insights from my development journey</p>
                </div>

                <Row>
                    {blogPosts.map((post, index) => (
                        <Col lg={4} md={6} key={post.id} data-aos="fade-up" data-aos-delay={index * 100}>
                            <article className="blog-card">
                                <div className="blog-image">
                                    {post.image ? (
                                        <img src={post.image} alt={post.title} />
                                    ) : (
                                        <div className="blog-placeholder">
                                            <span className="placeholder-icon">📝</span>
                                        </div>
                                    )}
                                    <span className="blog-category">{post.category}</span>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span className="meta-item">
                                            <FaCalendarAlt /> {post.date}
                                        </span>
                                        <span className="meta-item">
                                            <FaClock /> {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <a href={post.link} className="blog-link">
                                        Read More <FaArrowRight />
                                    </a>
                                </div>
                            </article>
                        </Col>
                    ))}
                </Row>

                <div className="blog-cta" data-aos="fade-up">
                    <p>Want to read more articles?</p>
                    <a href="https://medium.com/@naveenkandula" target="_blank" rel="noopener noreferrer" className="btn-primary-custom">
                        Visit My Blog
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default Blog;

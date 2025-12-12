import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Rajesh Kumar',
            role: 'Technical Lead',
            company: 'Vitelglobal Communication',
            image: null,
            content: 'Naveen is an exceptional developer who consistently delivers high-quality code. His expertise in React.js and Node.js helped us build a robust WebRTC platform that handles 50,000+ concurrent users seamlessly.',
            rating: 5,
        },
        {
            id: 2,
            name: 'Priya Sharma',
            role: 'Project Manager',
            company: 'ATTPL Group',
            image: null,
            content: 'Working with Naveen was a pleasure. His attention to detail and ability to optimize performance improved our application response times by 45%. He\'s a true full-stack professional.',
            rating: 5,
        },
        {
            id: 3,
            name: 'Arun Patel',
            role: 'Senior Developer',
            company: 'Tech Solutions',
            image: null,
            content: 'Naveen has an incredible ability to solve complex problems efficiently. His CI/CD implementations reduced our deployment times by 60%, and his code quality is always top-notch.',
            rating: 5,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section id="testimonials" className="testimonials-section">
            <Container>
                <div className="section-title" data-aos="fade-up">
                    <span className="section-subtitle">What People Say</span>
                    <h2>Testimonials</h2>
                    <p>Feedback from colleagues and clients I've worked with</p>
                </div>

                <div className="testimonials-carousel" data-aos="fade-up">
                    <button className="carousel-btn prev" onClick={handlePrev}>
                        <FaChevronLeft />
                    </button>

                    <div className="testimonials-wrapper">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                            >
                                <div className="quote-icon">
                                    <FaQuoteLeft />
                                </div>
                                <p className="testimonial-content">{testimonial.content}</p>
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="star-icon" />
                                    ))}
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {testimonial.image ? (
                                            <img src={testimonial.image} alt={testimonial.name} />
                                        ) : (
                                            <span className="avatar-initials">
                                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        )}
                                    </div>
                                    <div className="author-info">
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.role}</p>
                                        <span className="company">{testimonial.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-btn next" onClick={handleNext}>
                        <FaChevronRight />
                    </button>
                </div>

                <div className="testimonials-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;

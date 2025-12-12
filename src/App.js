import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Loading from './components/Loading/Loading';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <div className={`App ${isLoading ? 'loading' : 'loaded'}`}>
        <ParticlesBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Education />
        <Certifications />
        <Blog />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;

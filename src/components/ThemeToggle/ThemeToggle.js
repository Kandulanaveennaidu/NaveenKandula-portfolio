import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <div className={`toggle-track ${isDark ? 'dark' : 'light'}`}>
                <FaMoon className="icon moon-icon" />
                <FaSun className="icon sun-icon" />
                <div className="toggle-thumb"></div>
            </div>
        </button>
    );
};

export default ThemeToggle;

import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-screen">
            <div className="loading-content">
                <div className="loading-logo">
                    <span className="logo-text">KN</span>
                </div>
                <div className="loading-spinner">
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                </div>
                <p className="loading-text">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;

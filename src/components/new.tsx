import React from 'react';
import '../styles/New.css';

const New: React.FC = () => {
  return (
    <div className="new-page">
      <nav className="new-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/flowerplot.svg" alt="Flowerplot" className="logo-icon" />
          </div>
          <div className="nav-links">
            <a href="#" className="nav-link">Work</a>
            <a href="#" className="nav-link">
              Services
              <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Resources</a>
          </div>
          <button className="nav-contact-btn">CONTACT US</button>
        </div>
      </nav>
      
      <div className="new-container">
        <div className="hero-section">
          <div className="left-column">
            <h1 className="new-headline">
              Instantly turn survey data into{' '}
              <span className="highlight-text">insightful content</span>
            </h1>
            <p className="new-subhead">
              Flowerplot powers research-driven marketing campaigns with AI-generated data analysis and visualizations
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">GET STARTED</button>
              <button className="btn-secondary">BOOK A DEMO</button>
            </div>
          </div>
          <div className="right-column">
            <video 
              className="hero-video" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/Flowerplot_Web_Animation_1280_Compressed.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New; 
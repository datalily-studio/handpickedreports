import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import logo from '../Datalily_Logos_Digital_Icon_Azure.svg';

const Test: React.FC = () => {
    return (
        <div className="home-container">
            {/* Navigation Header */}
            <nav className="nav-header">
                <div className="nav-content">
                    <Link to="/" className="logo">
                        <img src="/flowerplot.svg" alt="Flowerplot" className="logo-image" />
                    </Link>
                    
                    <div className="nav-links">
                        <Link to="/work" className="nav-link">Work</Link>
                        <Link to="/services" className="nav-link">
                            Services
                            <span className="chevron">▼</span>
                        </Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/resources" className="nav-link">Resources</Link>
                    </div>
                    
                    <button className="contact-button">CONTACT US</button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-left">
                        <h1 className="hero-title">
                            Instantly turn survey data into <span className="highlight">insightful content</span>
                        </h1>
                        <p className="hero-subtitle">
                            Flowerplot powers research-driven marketing campaigns with AI-generated data analysis and visualizations.
                        </p>
                        
                        <div className="hero-buttons">
                            <button className="primary-button">GET STARTED</button>
                            <button className="secondary-button">BOOK A DEMO</button>
                        </div>
                    </div>
                    
                    <div className="hero-right">
                        <div className="hero-video-container">
                            <video 
                                className="hero-video"
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                poster="/flowerplot-header.png"
                            >
                                <source src="/flowerplot_web_animation_1280.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Logos Section */}
            <section className="partners-section">
                <h2 className="partners-title">PARTNERING WITH LEADING BRANDS AND COMPANIES ON THE GROW.</h2>
                <div className="partner-logos">
                    <div className="partner-logo">HubSpot</div>
                    <div className="partner-logo">Vimeo</div>
                    <div className="partner-logo">Toast</div>
                    <div className="partner-logo">Fetch</div>
                    <div className="partner-logo">Wistia</div>
                    <div className="partner-logo">Canva</div>
                    <div className="partner-logo">Airtable</div>
                    <div className="partner-logo">Miro</div>
                    <div className="partner-logo">Hostinger</div>
                    <div className="partner-logo">DoorDash</div>
                </div>
            </section>

            <footer className="footer">
                <p>Created by <a href="https://datalily.com">Datalily</a> – a women-owned content & research studio.</p>
                <a href="https://www.datalily.com">
                    <img src={logo} alt="Datalily Logo" className="footer-logo" />
                </a>
            </footer>
        </div>
    );
};

export default Test; 
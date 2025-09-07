import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import logo from '../Datalily_Logos_Digital_Icon_Azure.svg';

const Home: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simply show success message and clear form
        setEmail('');
        setShowSuccess(true);
        setIsSubmitting(false);
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    };

    return (
        <div className="home-container">
            <nav className="nav-header">
                <Link to="/" className="logo">
                    <img src="/FLOWERPLOT-logo.png" alt="FLOWERPLOT" className="logo-image" />
                </Link>
            </nav>

            <section className="hero-section">
                <h1 className="hero-title">
                    Automatically turn survey data into <span className="highlight">marketing-ready insights</span>
                </h1>
                <p className="hero-subtitle">
                Turn survey results into revenue-driving campaigns with the first data storytelling tool built for content marketing teams.
                </p>

                <p className="beta-text">
                    Interested in joining the beta and getting updates on Flowerplot?
                </p>

                {showSuccess ? (
                    <div className="success-message">
                        <p>✨ Thank you for signing up! We'll keep you updated on Flowerplot's progress.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="email-signup">
                        <input
                            type="email"
                            placeholder="EMAIL"
                            className="email-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isSubmitting}
                        />
                        <button 
                            type="submit" 
                            className="signup-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'SUBMITTING...' : 'STAY IN THE LOOP'}
                        </button>
                    </form>
                )}
            </section>

            <img 
                src="/flowerplot-header.png" 
                alt="Flowerplot Survey Data Analysis Interface" 
                className="demo-image"
            />

            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">
                        <img src="/icon-1-uncover-insights.svg" alt="Uncover Insights Icon" />
                    </div>
                    <h3 className="feature-title">Automatically uncover insights from survey data</h3>
                    <p className="feature-description">
                        Instantly pull insights for different audiences, like sales, product, and marketing teams, from your survey data.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        <img src="/icon-2-analyze-data.svg" alt="Analyze Data Icon" />
                    </div>
                    <h3 className="feature-title">Analyze datasets in minutes with AI</h3>
                    <p className="feature-description">
                        Easily find patterns and takeaways in survey data with help from AI that help you tell marketing stories that resonate. No pivot tables required.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        <img src="/icon-3-visualize.svg" alt="Visualize Data Icon" />
                    </div>
                    <h3 className="feature-title">Create on-brand data visualizations</h3>
                    <p className="feature-description">
                    Build data visualizations that magically follow data best practices using your brand identity to illustrate research findings.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        <img src="/icon-4-interactive.svg" alt="Interactive Data Icon" />
                    </div>
                    <h3 className="feature-title">Share live interactive data</h3>
                    <p className="feature-description">
                        Embed data visualizations on webpages that instantly update or download high-res files for design.
                    </p>
                </div>
            </div>

            <footer className="footer">
                <p>Created by <a href="https://datalily.com">Datalily</a> – a women-owned content & research studio.</p>
                <a href="https://www.datalily.com">
                    <img src={logo} alt="Datalily Logo" className="footer-logo" />
                </a>
            </footer>
        </div>
    );
};

export default Home; 
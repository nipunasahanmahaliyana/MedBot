import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page-enterprise">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel"
      >
        <div className="logo-area">
          <img src="/ai-med-logo.png" alt="AI Med Bot" className="logo-img" />
          <h1 className="brand-name">AI Nutri Check-Up</h1>
        </div>

        <h2 className="tagline">Predict. Prevent. Empower.</h2>
        <p className="subtext">
          Your intelligent medical assistant powered by AI & ML for early diagnosis, faster predictions, and better outcomes.
        </p>

        <div className="cta-buttons">
          <Link to="/login" className="btn btn-primary">Try Now</Link>
          <Link to="/signup" className="btn btn-secondary">Request Demo</Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose AI Med Bot?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>AI-Powered Predictions</h3>
            <p>Backed by advanced ML models trained on thousands of patient records.</p>
          </div>
          <div className="feature-card">
            <h3>High Accuracy</h3>
            <p>Achieve 95%+ prediction accuracy on various health conditions.</p>
          </div>
          <div className="feature-card">
            <h3>Fast Diagnosis</h3>
            <p>Instant result generation that saves time for patients and doctors alike.</p>
          </div>
          <div className="feature-card">
            <h3>Secure & Compliant</h3>
            <p>HIPAA-ready infrastructure with end-to-end encryption and security.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Doctors Say</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>"AI Med Bot reduced our patient diagnosis time by 70%! Highly reliable and accurate."</p>
            <span>- Dr. Samantha Perera</span>
          </div>
          <div className="testimonial-card">
            <p>"A game-changer in clinical workflows. Easy to use, incredibly smart."</p>
            <span>- Dr. Ahmed Ali</span>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="trusted-section">
        <h2>Trusted by Leading Clinics</h2>
        <div className="trusted-logos">
          <span>🩺 MediCare Plus</span>
          <span>🏥 WellLife Clinics</span>
          <span>🧬 Nova Diagnostics</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© 2025 AI Nutri Check-Up. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

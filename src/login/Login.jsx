import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo">
          <img src="/logo.png" alt="AI Med Bot" />
        </div>

        <h2 className="animated-heading">Welcome Back 👋</h2>
        <p className="sub-heading">Login to continue your medical insights</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group password-group">
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
            <span className="forgot-password">Forgot Password?</span>
          </div>

          <button type="submit" className="btn btn-primary">Login</button>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="social-buttons">
            <button className="btn-social google">🔵 Login with Google</button>
            <button className="btn-social github">⚫ Login with GitHub</button>
          </div>
        </form>

        <p className="signup-prompt">
          Don't have an account? <a href="/signup" className="link">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

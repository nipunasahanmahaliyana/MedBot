import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landing/LandingPage';
import Login from './login/Login';
// import Signup from './Signup';
import Dashboard from './dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
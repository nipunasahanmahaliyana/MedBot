import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionForm from '../question/QuestionForm';
import ReminderCalendar from '../calender/ReminderCalender';
import './Dashboard.css';

const Dashboard = () => {
  const [userHistory, setUserHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/history');
        setUserHistory(response.data.history || []);
      } catch (err) {
        setError('Failed to fetch history');
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🩺 Med Bot Dashboard</h1>
        <p>Your AI-powered health companion</p>
      </header>

      <div className="dashboard-grid">
        {/* Left Section: Prediction Form */}
        <section className="card-section glass-card">
          <h2 className="section-title">Symptom Prediction</h2>
          <QuestionForm />
        </section>

        {/* Right Section: Calendar */}
        <section className="card-section glass-card calendar-section">
          <h2 className="section-title">Reminder Calendar</h2>
          <ReminderCalendar />
        </section>
      </div>

      {/* User History Section */}
      <section className="history-section glass-card">
        <h2 className="section-title">Prediction History</h2>
        {loading ? (
          <p className="status-text">Loading history...</p>
        ) : error ? (
          <p className="status-text error">{error}</p>
        ) : userHistory.length > 0 ? (
          <ul className="history-list">
            {userHistory.map((entry, index) => (
              <li key={index} className="history-item">
                <p><strong>Symptoms:</strong> {entry.symptoms}</p>
                <p><strong>Prediction:</strong> {entry.prediction}</p>
                {entry.timestamp && (
                  <p className="timestamp">{new Date(entry.timestamp).toLocaleString()}</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="status-text">No prediction history found.</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;

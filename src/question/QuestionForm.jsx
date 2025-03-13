import React, { useState } from 'react';
import axios from 'axios';
import './QuestionForm.css';

const questions = [
  { id: 1, text: 'What are your symptoms?', type: 'text' },
  { id: 2, text: 'How long have you had these symptoms?', type: 'text' },
  { id: 3, text: 'Do you have any allergies?', type: 'text' },
  { id: 4, text: 'Have you taken any medication?', type: 'text' },
];

const QuestionForm = () => {
  const [responses, setResponses] = useState({});
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (id, value) => {
    setResponses({ ...responses, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(responses)
    try {
      const response = await axios.post('http://localhost:5000/predict', {
        responses,
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div className="question-form">
      <h2>Med Bot Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id} className="form-group">
            <label>{question.text}</label>
            {question.type === 'text' && (
              <input
                type="text"
                onChange={(e) => handleInputChange(question.id, e.target.value)}
                required
              />
            )}
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {prediction && (
        <div className="prediction-result">
          <h3>Prediction:</h3>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
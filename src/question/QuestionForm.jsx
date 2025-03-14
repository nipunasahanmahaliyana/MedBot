import React, { useState } from 'react';
import axios from 'axios';
import './QuestionForm.css';

const page1Questions = [
  { id: 1, text: 'What is your age?', type: 'number' },
  { id: 2, text: 'What is your height (in cm)?', type: 'number' },
  { id: 3, text: 'What is your weight (in kg)?', type: 'number' },
  { id: 4, text: 'What is your BMI?', type: 'number' },
  { id: 5, text: 'Have you ever consumed alcohol or smoked?', type: 'radio', options: ['Yes', 'No'] },
  { id: 6, text: 'How often do you buy fruits and vegetables?', type: 'select', options: ['Daily', 'Weekly', 'Monthly', 'Rarely'] },
  { id: 7, text: 'Do you include a variety of colors in your fruit and vegetable intake?', type: 'radio', options: ['Yes', 'No'] },
];

const page2Questions = [
  { id: 8, text: 'Do you prepare meals at home?', type: 'radio', options: ['Yes', 'No'] },
  { id: 9, text: 'If yes, how often?', type: 'select', options: ['Daily', 'Weekly', 'Monthly', 'Rarely'] },
  { id: 10, text: 'Do you prefer to eat fruit salads?', type: 'radio', options: ['Yes', 'No'] },
  { id: 11, text: 'Do you prefer to drink fruit juice/beverages?', type: 'radio', options: ['Yes', 'No'] },
  { id: 12, text: 'Do you prefer to take vegetable soup?', type: 'radio', options: ['Yes', 'No'] },
  { id: 13, text: 'Do you prefer to eat fruit pickles?', type: 'radio', options: ['Yes', 'No'] },
  { id: 14, text: 'How many servings of different vegetables do you usually eat per day?', type: 'number' },
  { id: 15, text: 'On average, how many servings of fruits do you consume per day?', type: 'number' },
  { id: 16, text: 'Do you usually eat fruits as a snack during the day?', type: 'radio', options: ['Yes', 'No'] },
];

const MultiStepForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [responses, setResponses] = useState({});

  const questions = currentPage === 1 ? page1Questions : page2Questions;

  const handleInputChange = (id, value) => {
    setResponses({ ...responses, [id]: value });
  };

  const handleNextPage = () => {
    setCurrentPage(2);
  };

  const handlePreviousPage = () => {
    setCurrentPage(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Responses:', responses);
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <div key={question.id} className="form-group">
          <label>{question.text}</label>
          {question.type === 'number' && (
            <input
              type="number"
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              required
            />
          )}
          {question.type === 'radio' && (
            <div>
              {question.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
          {question.type === 'select' && (
            <select
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              required
            >
              <option value="">Select an option</option>
              {question.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}

      <div className="form-navigation">
        {currentPage === 2 && (
          <button type="button" onClick={handlePreviousPage}>
            Previous
          </button>
        )}
        {currentPage === 1 ? (
          <button type="button" onClick={handleNextPage}>
            Next
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </div>
    </form>
  );
};

export default MultiStepForm;
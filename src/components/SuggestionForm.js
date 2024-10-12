import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios
import './SuggestionForm.css';
import { API_ROUTES } from '../app_modules/apiRoutes';

const SuggestionForm = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem('token'); // Retrieve token from local storage

    // Combine email and feedback into one message
    const message = `You received feedback from email ${email}. User says: "${feedback}"`;

    try {
      const response = await axios.post(API_ROUTES.feedbackEduisfy, { feedback: message, token }); // Send token with feedback
      setSuccessMessage('Feedback submitted successfully!'); // Set success message
      setFeedback(''); // Clear the feedback after submission
      setEmail(''); // Clear the email after submission
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSuccessMessage('Error submitting feedback, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="suggestion-form-container">
      <h2>Submit Your Suggestion</h2>
      <p className="suggestion-subtitle">
        If you're facing any difficulty, need help with the app, or want to submit your opinion and feedback to make our app better, we are here to help and hear you!
      </p>
      <form onSubmit={handleSubmit} className="suggestion-form">
        <input
          className="suggestion-form-input"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="suggestion-form-input"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          className="suggestion-form-textarea"
          placeholder="Your Suggestion"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />

        <button className="suggestion-form-button" type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default SuggestionForm;

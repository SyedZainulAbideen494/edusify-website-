import React, { useState } from 'react';
import './FAQSection.css'; // Import the CSS for styling

const faqData = [
  { 
    question: 'I downloaded Edusify, but it’s not displaying on my phone. What should I do?', 
    answer: 'After downloading Edusify on Android, you need to install it manually. Go to your downloads folder, tap the file, and install it.' 
  },
  { 
    question: 'What is Edusify?', 
    answer: 'Edusify is an all-in-one study companion that helps students manage tasks, collaborate with peers, and improve their learning with AI-powered features.' 
  },
  { 
    question: 'Is Edusify free to use?', 
    answer: 'Edusify offers both a free plan with basic features and a premium plan for more advanced tools like unlimited flashcards and AI-generated study timetables.' 
  },
  { 
    question: 'What platforms is Edusify available on?', 
    answer: 'Currently, Edusify is available on Android and through the web. We are working to expand to iOS soon.' 
  },
  { 
    question: 'How do I create or join study groups in Edusify?', 
    answer: 'You can create or join study groups from the "Study Groups" section in the app. Just search for public groups or start your own private group.' 
  },
  { 
    question: 'How can I share my flashcards or notes with friends?', 
    answer: 'You can share your flashcards, notes, or quizzes directly in study groups or by sharing a link to the material from within the app.' 
  },
  { 
    question: 'How does the AI Solver work in Edusify?', 
    answer: 'The AI Solver helps solve problems in subjects like math and science. Simply input your question, and the AI will generate solutions along with explanations.' 
  },
  { 
    question: 'Does Edusify send reminders for tasks and events?', 
    answer: 'Yes! Edusify sends email reminders at 7 AM, 3 PM, and 9 PM IST for any upcoming tasks or events that are due within 3 days.' 
  },
  { 
    question: 'Can I use Edusify offline?', 
    answer: 'Yes, you can download flashcards and notes as PDFs to access them offline.' 
  },
  { 
    question: 'How do I upgrade to Edusify Premium?', 
    answer: 'You can upgrade to Edusify Premium from the app’s settings. It offers additional features like AI-generated study plans and unlimited flashcards.' 
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>FAQ</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h4>{item.question}</h4>
              <span className={`arrow ${openIndex === index ? 'open' : ''}`}>
                {/* SVG arrow */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24"
                  className={`arrow-icon ${openIndex === index ? 'open' : ''}`}
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </span>
            </div>
            <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

import React, { useState } from "react";
import "./FaqSection.css";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "What is Edusify?",
      answer:
        "Edusify is a student productivity app that combines essential study tools into a single platform to simplify student life and boost academic performance.",
    },
    {
      question: "How do I create an account?",
      answer:
        "To create an account, first download the app by clicking on the 'Get App' button at the top right. Once you download the app, you will automatically be directed to the sign-up interface the first time you open it.",
    },
    {
      question: "Can I use Edusify for team studies?",
      answer:
        "Yes, Edusify allows you to create 'Rooms' where you can invite your peers to collaborate on projects, share notes, quizzes, and track progress.",
    },
    {
      question: "Is Edusify free?",
      answer:
        "Yes, Edusify is completely free to use! All of our core features are available at no cost, and we’re proud to offer a lot of value for free. However, we also have a premium version available that unlocks even more powerful tools—designed to help you study smarter. Don’t worry, it’s very affordable, ensuring you get top-notch study resources without a hefty price tag. So, whether you’re using the free version or exploring the premium one, Edusify has something amazing for everyone!",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team by emailing us at edusyfy@gmail.com. We're always here to assist you with any questions or issues.",
    },
    {
      question: "How do I download Edusify?",
      answer:
        "To download Edusify, click on the 'Get App' button at the top right of the website. You can then download the app for your platform and start using it right away.",
    },
    
    {
      question: "How do I reset my password?",
      answer:
        "If you've forgotten your password, click on the 'Forgot Password' link on the sign-in page. Enter your registered email address, and we'll send you instructions to reset your password.",
    },
    {
      question: "Will there be a premium version of Edusify?",
      answer:
        "Yes, Edusify does have a premium version that offers additional features. However, we’ve made sure it’s very affordable, keeping in mind the price sensitivity of our users. The premium version offers enhanced tools and more customization options, but the core features are still available for free to everyone.",
    },
    {
      question: "Can I share my notes with others?",
      answer:
        "Yes, Edusify allows you to share your notes with others by using the 'Rooms' feature. You can collaborate with peers and share resources seamlessly.",
    },
   
  ];
  

  return (
    <section className="faq__Faq__page">
      <div className="faq__Faq__page__container">
        <h2 className="faq__Faq__page__title">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq__Faq__page__item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className="faq__Faq__page__header"
              onClick={() => toggleAnswer(index)}
            >
              <div className="faq__Faq__page__icon">
                <i className="fas fa-question-circle"></i>
              </div>
              <h3 className="faq__Faq__page__question">{faq.question}</h3>
            </div>
            <div className="faq__Faq__page__answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

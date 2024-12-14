import React from 'react';
import './Testimonials.css'; // Your styles for the testimonials

const Testimonials = () => {
  const reviews = [
    {
      author: 'Amrutha Varshini',
      text: "This app is perfect for students! I no longer need to download multiple apps to organize and track my tasks. It’s incredibly useful and efficient.",
      rating: 5,
      photo: 'https://lh3.googleusercontent.com/a-/ALV-UjXYDHTE63gztrCf5RcYvePScvI9pmDttecb8vyUDL2q7UapUqa5=w60-h60-p-rp-mo-br100', // Example profile photo
    },
    {
      author: 'Kaleem Zain',
      text: "Edusify has completely changed the way I study. The AI tools are incredibly helpful, and I love how easy it is to stay organized with the task manager and calendar with daily reminders through email. It’s the perfect app for staying on top of everything!",
      rating: 4,
      photo: 'https://lh3.googleusercontent.com/a/ACg8ocIJtRh4pbk0jm0QSgYn7tYDz1H26jV_xEQJzeSMqQxsTSjHJgZd=w60-h60-p-rp-mo-ba4-br100', // Example profile photo
    },
    {
      author: 'Tanmay Sharma',
      text: "This is very useful app for student to make schedule and also for quiz 😄",
      rating: 5,
      photo: 'https://lh3.googleusercontent.com/a-/ALV-UjURyz9UW0kZJlMuLvtSbjmtch8v49-W_onKQNIuiVBT_0-_D_x6=w60-h60-p-rp-mo-br100', // Example profile photo
    },
    {
      author: 'Nimisha Pathak',
      text: "Loved it ...... Best part most  features free",
      rating: 4,
      photo: 'https://lh3.googleusercontent.com/a/ACg8ocKZ4dcBatjsrBAHcbGxyASZyl3FJ3DvaCTb6nD-zfeDp1pCOg=w60-h60-p-rp-mo-br100', // Example profile photo
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__heading">What Our Users Say</h2>
        <div className="testimonials__grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial__card">
              <img
                src={review.photo}
                alt={review.author}
                className="testimonial__photo"
              />
              <div className="testimonial__content">
                <p className="testimonial__text">"{review.text}"</p>
                <p className="testimonial__author">- {review.author}</p>
                <div className="testimonial__rating">
                  {'⭐'.repeat(review.rating)} {/* Displaying the rating stars */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

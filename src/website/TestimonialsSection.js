import React from 'react';
import Slider from 'react-slick';
import './TestimonialsSection.css';

const testimonials = [
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Edusify is a game-changer! The Pomodoro timer keeps me on track and focused. 🙌',
      rating: 5,
      name: 'Ava White',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Loving the study groups feature! 💯 Perfect for team projects and sharing notes.',
      rating: 5,
      name: 'Ethan Lee',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The notes look so cool with all the custom themes. 🌈 Plus, the music player is a vibe!',
      rating: 4,
      name: 'Isabella Garcia',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Can’t believe I never missed a deadline again... Thx Edusify! ⏰',
      rating: 5,
      name: 'Mason Rodriguez',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Quizzes and flashcards are a total lifesaver for finals. 🎓 10/10 would recommend!',
      rating: 5,
      name: 'Charlotte Martinez',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Edusify makes studying fun and less of a chore. 🎉 Loving the interface!',
      rating: 5,
      name: 'Logan Taylor',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The calendar and reminders are so clutch. 🗓️ Can’t live without them!',
      rating: 4,
      name: 'Mia Brown',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Amazing app! The task manager helps me stay organized like never before. 📚',
      rating: 5,
      name: 'Jackson Harris',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Love the way I can customize everything... from notes to themes. 😍',
      rating: 4,
      name: 'Aiden Wilson',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The study groups feature is fire 🔥. Great way to collaborate and ace projects!',
      rating: 5,
      name: 'Sofia Anderson',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Edusify’s Pomodoro timer keeps me super productive. 💪',
      rating: 5,
      name: 'Henry Adams',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The music player is a nice touch. 🎶 Helps me stay chill and focused.',
      rating: 4,
      name: 'Luna Johnson',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'My grades have improved since using Edusify. 📈 Totally worth it!',
      rating: 5,
      name: 'James Lee',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The reminders keep me on top of things. No more last-minute cramming! 📅',
      rating: 5,
      name: 'Emily King',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The design is sleek and modern. 🖤 I’m obsessed with the themes!',
      rating: 4,
      name: 'Benjamin Clark',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Edusify’s quizzes are so helpful for last-minute reviews. 🔥',
      rating: 5,
      name: 'Grace Miller',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'I’ve never been so organized! 🙌 Edusify’s task manager is a lifesaver.',
      rating: 5,
      name: 'Oliver Lewis',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Customizable notes make studying way more enjoyable. 📝💫',
      rating: 4,
      name: 'Ella Robinson',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The collaborative features are so handy for group work. 👯‍♂️',
      rating: 5,
      name: 'Lucas Walker',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Edusify’s interface is super easy to navigate. 👍 Totally recommend!',
      rating: 5,
      name: 'Aria Scott',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The calendar keeps me from missing deadlines. ⏳ It’s a must-have!',
      rating: 4,
      name: 'Mason Green',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The Pomodoro timer is the best feature! Keeps me on track. 🕰️',
      rating: 5,
      name: 'Chloe Carter',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Can’t get enough of the aesthetic notes. So easy on the eyes. 👁️‍🗨️',
      rating: 4,
      name: 'Jacob Nelson',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Edusify’s study groups make teamwork a breeze. 🗣️💡',
      rating: 5,
      name: 'Lily Hernandez',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Music and study go hand in hand now. 🎵 Thanks to Edusify!',
      rating: 5,
      name: 'Michael Rivera',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The reminders are a game changer. No more missing deadlines! 🚀',
      rating: 5,
      name: 'Zoe Adams',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Love how I can customize my study space. 🌟 Edusify makes it fun!',
      rating: 4,
      name: 'Ethan Young',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Edusify’s Pomodoro timer keeps me from burning out. 🔥👊',
      rating: 5,
      name: 'Nora James',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Quizzes and flashcards make studying so much easier. 🙌',
      rating: 5,
      name: 'Aiden Roberts',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The task manager is the best! So easy to keep track of everything. 📋',
      rating: 4,
      name: 'Hannah King',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The calendar feature is super helpful. I’m never late on assignments. 📅',
      rating: 5,
      name: 'Jack Lee',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Customizable themes are a game-changer. My notes look amazing! 🎨',
      rating: 4,
      name: 'Mia Martinez',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Edusify’s study groups are perfect for collaboration. 🤝',
      rating: 5,
      name: 'Eli Carter',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The Pomodoro timer keeps my focus sharp. 🏆',
      rating: 5,
      name: 'Maya Clark',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Loving the sleek design and easy navigation. Edusify’s a winner! 🏅',
      rating: 5,
      name: 'Owen Scott',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The music player is a nice touch for study sessions. 🎶',
      rating: 4,
      name: 'Emma Evans',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'Edusify’s reminders and calendar features are on point. 📅✨',
      rating: 5,
      name: 'Liam Robinson',
    },
    {
      photo: 'https://via.placeholder.com/100',
      quote: 'The customizable notes are awesome. Makes studying so much more engaging. 💡',
      rating: 4,
      name: 'Olivia Lee',
    },
  ];
  

  const TestimonialsSection = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      adaptiveHeight: true,
      fade: true,
    };
  
    return (
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <Slider {...settings} className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-rating">{'★'.repeat(testimonial.rating)}</div>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </section>
    );
  };
  
  export default TestimonialsSection;
import React, { useEffect, useState } from 'react';
import './Loader.css'; // Ensure the path to your CSS is correct
import LoadingCard from './loaderText';

const Loader = ({ onLoadComplete }) => {
  const words = ["buttons", "forms", "switches", "cards"];
  const [currentWord, setCurrentWord] = useState(words[0]); // Initialize with the first word

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      onLoadComplete(); // Callback to indicate loading is complete
    }, 1000); // Show loader for 1 second

    const changeWord = () => {
      setCurrentWord(prev => {
        const currentIndex = words.indexOf(prev);
        const nextIndex = (currentIndex + 1) % words.length; // Cycle through the words
        return words[nextIndex]; // Set the current word
      });
    };

    const intervalId = setInterval(changeWord, 1000); // Change word every second

    return () => {
      clearInterval(intervalId); // Cleanup on unmount
      clearTimeout(timer); // Cleanup timer
    };
  }, [onLoadComplete, words]);

  return (
    <div className="loader">
     <LoadingCard/>
    </div>
  );
};

export default Loader;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import backgroundImg from '../image/plan.jpg'; // Assurez-vous que le chemin est correct

function Home() {
  // State to control visibility of the content
  const [showContent, setShowContent] = useState(false);

  // Function to handle the click event
  const handleClick = () => {
    setShowContent(true);
  };

  return (
    <div className="relative max-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${backgroundImg})` }} // Use this if you have a background image
      ></div>

      {/* Conditional Content */}
      {showContent ? (
        <div className="relative z-10 text-center p-4 md:p-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Online <span className="text-sky-400">Pharmacy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Welcome to our pharmacy. Your health is our priority.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Get Started
          </Link>
        </div>
      ) : (
        // Initial view with just the transparent background, clickable to reveal content
        <div
          className="absolute inset-0 z-10 flex items-center justify-center"
          onClick={handleClick}
          style={{ cursor: 'pointer', background: 'transparent' }} // Transparent background
        >
          <div className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Click to Enter
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;


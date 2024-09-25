import React from 'react';
import { Link } from 'react-router-dom';
// import backgroundImg from '../image/plan.jpg'; // Assurez-vous que le chemin est correct

function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-200">
      {/* Image de fond */}
      <div
        // className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>

      {/* Contenu principal */}
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
    </div>
  );
}

export default Home;




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
    <div className="relative min-h-screen flex items-center justify-center bg-gray-200">
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
        // Initial view with just the background, clickable to reveal content
        <div
          className="absolute inset-0 z-10 flex items-center justify-center"
          onClick={handleClick}
          style={{ cursor: 'pointer' }} // Makes the entire area clickable
        >
          <div className="text-white text-xl font-semibold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Click to Enter
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;


import React from 'react';

function About() {
  return (
    <div className="bg-sky-100 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">About Our Pharmacy</h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white p-6 rounded-lg shadow-md max-w-5xl w-full">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src="/images/pharmacy-photo.jpg" // Replace this with the actual photo path
            alt="Our Pharmacy"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-6 text-gray-700">
          <p className="text-lg italic mb-4">
            Welcome to our pharmacy, where we provide high-quality healthcare, professional advice, and a comprehensive range of products to meet your needs. Our team of experts is dedicated to delivering exceptional service to every customer.
          </p>
          <p className="text-lg italic">
            Whether it’s for your medications, health products, or advice, we are here to help you maintain your well-being. Visit us to learn more about our services and how we can assist you on your health journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
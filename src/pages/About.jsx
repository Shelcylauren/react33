import React from 'react';
import myImage from '../image/S.jpg'

function About() {
  return (
    <div className="bg-transparent min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">About Salvia Pharmacy</h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white p-6 rounded-lg shadow-md max-w-5xl w-full">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={myImage} // Easier to update image path
            alt="salvia Pharmacy"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-6 text-gray-700">
          <p className="text-lg italic mb-4">
            Welcome to Salvia pharmacy! where we provide high-quality healthcare, professional advice, and a comprehensive range of products to meet your needs. Our team of experts is dedicated to delivering exceptional service to every customer.
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


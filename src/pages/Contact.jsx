import React from 'react';
import { Link } from 'react-router-dom';
// import { FaWhatsapp } from 'react-icons/fa'; 
// import { FaEnvelope} from 'react-icons/fa'; 
// import { FaFacebook } from 'react-icons/fa'; 
// import { FaPhone } from 'react-icons/fa'; 

function Contact() {
return (
    <div className="max-h-screen flex flex-col items-center justify-center bg-whrit-100 p-0">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Reach Us At:</h3>
          <p className="text-gray-600">SALVIA PHARMACY</p>
          <p className="text-gray-600">237 salvia pharmacy. Bafoussam, Cameroon</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            {/* <FaPhone className="text-green-600" /> */}
            <a href="tel:+237 655 57 09 21" className="text-lg text-gray-700 hover:text-green-600">
              +237 655 57 09 21 
            </a>
          </div>

          <div className="flex items-center space-x-3">
            {/* <FaWhatsapp className="text-green-600" /> */}
            <a href="https://wa.me/655 57 09 21" className="text-lg text-gray-700 hover:text-green-600">
              WhatsApp
            </a>
          </div>

          <div className="flex items-center space-x-3">
            {/* <FaEnvelope className="text-blue-600" /> */}
            <a href="mailto:info@pharmacy.com" className="text-lg text-gray-700 hover:text-blue-600">
              salviapharmacy@gmail.com
            </a>
          </div>

          
          </div>
        </div>
      </div>
    
  );
}

export default Contact;

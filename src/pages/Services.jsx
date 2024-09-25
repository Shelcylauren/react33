import React from 'react';


function Services() {
  return (
    <div className="max-h-screen bg-sky-100 flex flex-col md:flex-row">
      <div className="flex-1 flex items-center justify-center p-0 md:p-10">
        <div className="max-w-md w-full text-center">
        
           <h2 className="text-3xl font-bold mb-4">Pharmacy Services</h2>

          <ul className="list-disc list-inside text-left space-y-4">
            <li className="text-lg font-medium">Prescription Medication</li>
            <li className="text-lg font-medium">Online-the-Counter Products</li>
            <li className="text-lg font-medium">Health Screenings</li>
            <li className="text-lg font-medium">Vaccinations</li>
            <li className="text-lg font-medium">blood sugar measurement</li>
            <li className="text-lg font-medium">Consultations with Pharmacists</li>
          </ul>

          <p className="mt-6 text-sm text-gray-600">
            For more information, <a href="mailto:info@pharmacy.com" className="text-indigo-600 hover:text-indigo-700">contact </a>.
          </p>
        </div>
      </div>

     
      <div className="hidden md:flex flex-0 items-center justify-center bg-whrit-50">
        
      </div>
    </div>
  );
}

export default Services;

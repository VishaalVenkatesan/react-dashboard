import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectCountry = () => {
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleSelect = () => {
    if (country) {
      navigate(`/dashboard?country=${country}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className=" max-w-lg p-8 ] bg-white shadow-lg  rounded-xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">Select a Country</h1>
        <select 
          value={country} 
          onChange={(e) => setCountry(e.target.value)}
          className="w-full p-4 mb-6 bg-white border border-gray-300 rounded-lg shadow-sm text-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="IND">India</option>
        </select>
        <button 
          onClick={handleSelect}
          className="w-full p-4 mb-4 text-xl text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"    
        >
          Go to Dashboard
        </button>
        <a href="/" className="block text-lg text-center text-blue-900 transition hover:text-blue-700">
          Go to Landing
        </a>
      </div>
    </div>
  );
};

export default SelectCountry;

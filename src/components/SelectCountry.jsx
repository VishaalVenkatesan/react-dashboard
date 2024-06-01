// src/components/SelectCountry.jsx
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
    <div className="flex flex-col py-8">
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-700">Select a Country</h1>
      <div className="flex flex-col items-center min-h-screen ">
        <select 
          value={country} 
          onChange={(e) => setCountry(e.target.value)}
          className="w-[150px] mt-[40px] p-4 mb-8 text-2xl bg-white border border-gray-300 rounded-[20px] shadow-sm text-bold focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
            <option value="">--</option>
          <option value="USA">USA</option>
          <option value="IND">India</option>
        </select>
        <button 
          onClick={handleSelect}
          className="mt-[40px] text-2xl p-4 text-white bg-blue-600 rounded-[20px] shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"    
        >
          Go to Dashboard
        </button>
        <a href="/" className="mt-[40px] text-xl p-4 text-blue-900">
            Go to Landing
        </a>
      </div>
    </div>
  );
};

export default SelectCountry;
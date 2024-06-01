import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-500 to-indigo-600 gap-y-8">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-xl">
        <h1 className="mb-6 text-4xl font-bold text-center text-gray-800">Welcome to the Dashboard</h1>
        <p className="mb-6 text-lg text-center text-gray-600">
          To get started, please select a country using the button below. You will then be redirected to the dashboard where you can explore different features.
        </p>
        <div className="flex justify-center">
          <Link 
            to="/select" 
            className="px-6 py-3 text-xl text-white transition duration-300 bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700"
          >
            Select Country
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;

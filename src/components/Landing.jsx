import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen p-8 gap-y-[30px]">
      <h1 className="text-4xl font-bold text-gray-700">Welcome to the  Dashboard</h1>
      <p className="text-lg text-gray-600">To get started, please select a country using the button below. You will then be redirected to the dashboard where you can explore different features.</p>
      <Link 
        to="/select" 
        className="w-[180px] p-3 text-xl text-white bg-blue-600 rounded shadow-sm hover:bg-blue-700 "
      >
        Select Country
      </Link>
    </div>
  );
};

export default Landing;
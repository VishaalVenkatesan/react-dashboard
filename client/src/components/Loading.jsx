import { cardio } from 'ldrs';

const Loading = () => {
  cardio.register();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-xl shadow-lg flex items-center justify-center">
        <l-cardio
          size="50"
          stroke="4"
          speed="2"
          color="black"
        ></l-cardio>
      </div>
    </div>
  );
};

export default Loading;

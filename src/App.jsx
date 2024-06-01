// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Footer from './components/Footer';
import SelectCountry from './components/SelectCountry';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/select" element={<SelectCountry />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
};

export default App;

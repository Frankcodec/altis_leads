import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WorksHeader from './pages/Projects';
// Import other pages as needed

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FCFCFC]">
        <Navbar />
        {/* The Routes determine which component to render based on the URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<WorksHeader />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
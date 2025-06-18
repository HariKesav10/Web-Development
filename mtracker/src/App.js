import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // Import the Navbar
import HomePage from './pages/home';   // Import the Home page
import AboutPage from './pages/about';  // Import the About page
import './App.css'; // For general app styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* <-- The Navbar is placed here, once! */}
        <main>
          <Routes> {/* The Routes component defines where page content will go */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Homepage from './components/Homepage';
import MentorPage from './components/MentorPage';
import MenteePage from './components/MenteePage';
import MyNavbar from './components/Navbar';
import './styles/custom.css'; // Import custom CSS



function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mentor" element={<MentorPage />} />
        <Route path="/mentee" element={<MenteePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;


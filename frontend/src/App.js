import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FileUploadPage from './pages/FileUploadPage'; // Import the file upload page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<FileUploadPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

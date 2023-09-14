import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import CertificateGalery from './pages/certificateGalery';
import Education from './pages/education';
import Experience from './pages/experience';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App/>}/>
      <Route path="/certificategallery" element={<CertificateGalery />} />
      <Route path="/education" element={<Education/>}/>
      <Route path="/experience" element={<Experience/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();

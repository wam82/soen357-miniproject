import './App.css';// eslint-disable-next-line 
import { useEffect, useState } from "react";// eslint-disable-next-line 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/components/HomePage/HomePage'
import LeftPane from './components/Panels/LeftPane';
import PrescriptionPage from '../src/components/Prescription/PrescriptionPage';
import MedicalHistory from '../src/components/MedHistory/MedHistory';

function App() {
  const getCurrentPage = () => {
    const path = window.location.pathname;
    const parts = path.split('/'); // Split the path by '/'
    return parts[parts.length - 1]; // Get the last part
  };
  return (
    <BrowserRouter>
      <div className="container">
      <div className="left-pane">
          <LeftPane currentPage={getCurrentPage()}/>
          
        </div>
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/prescriptions' exact Component={PrescriptionPage}/>
            <Route path='/medical-history' exact Component={MedicalHistory}/>
          </Routes>
        </div>
    </div>
  </BrowserRouter>
  );
}
export default App;

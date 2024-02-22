import './App.css';// eslint-disable-next-line 
import { useEffect, useState } from "react";// eslint-disable-next-line 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/components/HomePage/HomePage'
import LeftPane from './components/Panels/LeftPane';
import PrescriptionPage from '../src/components/Prescription/PrescriptionPage';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="left-pane">
          <LeftPane />
        </div>
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/prescriptions' exact Component={PrescriptionPage}/>
          </Routes>
        </div>
    </div>
  </BrowserRouter>
  );
}

export default App;

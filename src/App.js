import './App.css';// eslint-disable-next-line 
import { useEffect, useState } from "react";// eslint-disable-next-line 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/components/HomePage/HomePage'
import LeftPane from '../src/components/LeftPane/LeftPane';

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
            {/* Define routes for other pages */}
          </Routes>
        </div>
    </div>
  </BrowserRouter>
  );
}

export default App;

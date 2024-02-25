import './App.css';// eslint-disable-next-line 
import { useEffect, useState } from "react";// eslint-disable-next-line 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/components/HomePage/HomePage'
import LeftPane from './components/Panels/LeftPane';
import PrescriptionPage from '../src/components/Prescription/PrescriptionPage';
import MedicalHistory from '../src/components/MedHistory/MedHistory';
import MedEvent from '../src/components/DetailPages/MedEvent';
import Vaccines from '../src/components/Vaccines/Vaccines';
import SurgeriesPage from './components/Surgeries/Surgeries';
import SurgeryEvent from './components/DetailPages/SurgeryEvent';
import Lab from './components/LabTests/Lab';
import UA from './components/DetailPages/Analysis';
import Bio from './components/DetailPages/Biopsy';
import BloodWork from './components/DetailPages/BloodWork';
import CBC from './components/DetailPages/CBC';
import BMP from './components/DetailPages/BMP';
import Coag from './components/DetailPages/Coagulation';
import Chol from './components/DetailPages/Cholesterol';
import Gluc from './components/DetailPages/Glucose';
import Thy from './components/DetailPages/Thyroid';
import Liv from './components/DetailPages/Liver';
import CRP from './components/DetailPages/CRP';
import UC from './components/DetailPages/Culture';
import UP from './components/DetailPages/Pregnancy';
import UD from './components/DetailPages/Drug';
import Gen from './components/DetailPages/Genetic';
import EG from './components/DetailPages/Cardiogram';
import Endo from './components/DetailPages/Endoscopy';
import LabEvent from './components/DetailPages/LabEvent';
import Scan from './components/Scans/Scans';
import ScanEvent from './components/DetailPages/ScanEvent';
import ChestRay from './components/DetailPages/ChestXRay';
import BoneRay from './components/DetailPages/BoneXRay';
import DRay from './components/DetailPages/DentalXRay';
import HeadCT from './components/DetailPages/HeadCT';
import AbdoCT from './components/DetailPages/AbdominalCT';
import ChestCT from './components/DetailPages/ChestCT';
import PelvicCT from './components/DetailPages/PelvicCT';
import AbdoUS from './components/DetailPages/AbdmoninalUS';
import ObsUS from './components/DetailPages/ObstetricUS';
import CardiacUS from './components/DetailPages/CardiacUS';


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
            <Route path='/event1' exact Component={MedEvent}/>
            <Route path='/vaccines' exact Component={Vaccines}/>
            <Route path='/surgeries-and-hospitalizations' exact Component={SurgeriesPage}/>
            <Route path='/surgery1' exact Component={SurgeryEvent}/>
            <Route path='/blood-work' exact Component={BloodWork}/>
            <Route path='/cbc' exact Component={CBC}/>
            <Route path='/bmp' exact Component={BMP}/>
            <Route path='/coagulation-profile' exact Component={Coag}/>
            <Route path='/cholesterol' exact Component={Chol}/>
            <Route path='/glucose' exact Component={Gluc}/>
            <Route path='/thyroid' exact Component={Thy}/>
            <Route path='/liver' exact Component={Liv}/>
            <Route path='/crp' exact Component={CRP}/>
            <Route path='/urine-analysis' exact Component={UA}/>
            <Route path='/urine-culture' exact Component={UC}/>
            <Route path='/urine-pregnancy' exact Component={UP}/>
            <Route path='/urine-drug' exact Component={UD}/>
            <Route path='/biopsy' exact Component={Bio}/>
            <Route path='/genetic' exact Component={Gen}/>
            <Route path='/electrocardiogram' exact Component={EG}/>
            <Route path='/endoscopy' exact Component={Endo}/>
            <Route path='/lab' exact Component={Lab}/>
            <Route path='/lab1' exact Component={LabEvent}/>
            <Route path='/scans' exact Component={Scan}/>
            <Route path='/scan1' exact Component={ScanEvent}/>
            <Route path='/chest-xray' exact Component={ChestRay}/>
            <Route path='/bone-xray' exact Component={BoneRay}/>
            <Route path='/dental-xray' exact Component={DRay}/>
            <Route path='/head-ct' exact Component={HeadCT}/>
            <Route path='/abdominal-ct' exact Component={AbdoCT}/>
            <Route path='/chest-ct' exact Component={ChestCT}/>
            <Route path='/pelvic-ct' exact Component={PelvicCT}/>
            <Route path='/abdominal-us' exact Component={AbdoUS}/>
            <Route path='/obstetric-us' exact Component={ObsUS}/>
            <Route path='/cardiac-us' exact Component={CardiacUS}/>
          </Routes>
        </div>
    </div>
  </BrowserRouter>
  );
}
export default App;

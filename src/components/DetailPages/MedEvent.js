import React from 'react';
import './MedEvent.css'
import RightPanel from '../Panels/RightPane';

function PrescriptionPage() {
  return (
    <div className="core">
      <div className="main-panel">

        <h1>Medical Event</h1>

        
        <div className='right-panel'><RightPanel currentPage="MedEvent" /></div>  

        <h2 id='symptom'>Typical Symptoms</h2>

        <p>Symptom 1, Symptom 2, Symptom 3</p>

        <h2 id='risk'>Risk Factors</h2>
        <p>Risk 1, Risk 2, Risk 3, Risk 4</p>

        <h2 id='plan'>Treatment Plan</h2>
        <p className='content'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.</p>
        
        <h2 id='impact'>Impact On Daily Life</h2>
        <p>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
        orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
        eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
        Interdum praesent ut penatibus fames eros ad consectetur sed.</p>
        
      </div>
      <div className="dropdown-container">
        <div className="dropdown">
          <button className="dropbtn">Languages</button>
          <div className="dropdown-content">
            <button>English</button>
            <button>Spanish</button>
            <button>French</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrescriptionPage;

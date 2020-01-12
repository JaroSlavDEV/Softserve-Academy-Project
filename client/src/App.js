import React, { useState, useEffect } from "react";

// SERVICES
import defibrillatorService from './services/defibrillatorService';

function App() {
  const [defibrillators, setdefibrillators] = useState(null);

  useEffect(() => {
    if(!defibrillators) {
      getDefibrillators();
    }
  })

  const getDefibrillators = async () => {
    let res = await defibrillatorService.getAll();
    setdefibrillators(res);
  }

  const renderDefibrillator = defibrillator => {
    return (
      <li key={defibrillator._id} className="list__item defibrillator">
        <h3 className="defibrillator__name">{defibrillator.title}</h3>
        <p className="defibrillator__description">{defibrillator.address}</p>
        <p className="defibrillator__description">{defibrillator.location.coordinates[1]}, {defibrillator.location.coordinates[0]}</p>
        <p className="defibrillator__description">{defibrillator.actual_date}</p>
        <p className="defibrillator__description">{defibrillator.floor}</p>
        <p className="defibrillator__description">{defibrillator.storage_place}</p>
        <p className="defibrillator__description">{defibrillator.accessibility}</p>
        <p className="defibrillator__description">{defibrillator.language}</p>
        <p className="defibrillator__description">{defibrillator.informational_plates}</p>
        <p className="defibrillator__description">{defibrillator.phone.join(', ')}</p>
        <p className="defibrillator__description">{defibrillator.additional_information}</p>
        <hr/>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(defibrillators && defibrillators.length > 0) ? (
          defibrillators.map(defibrillator => renderDefibrillator(defibrillator))
        ) : (
          <p>No defibrillators found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
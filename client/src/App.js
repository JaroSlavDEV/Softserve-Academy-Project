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
        <h3 className="defibrillator__name">{defibrillator.name}</h3>
        <p className="defibrillator__description">{defibrillator.description}</p>
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
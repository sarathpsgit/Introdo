import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BenefitsSection from './components/BenefitsSection';
import Perks from './components/Perks';
import Footer from './components/Footer';

function App() {
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = (timeInSeconds) => {
    const totalSeconds = 60; // 14:00 to 14:59 = 60 seconds
    const percentage = ((timeInSeconds - (14 * 60)) / totalSeconds) * 100;
    setProgress(percentage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <BenefitsSection/>
        <Perks/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;

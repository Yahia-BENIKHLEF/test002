import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import VehiclesSection from './components/VehiclesSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeSection />
      
      <Footer />
    </div>
  );
}

export default App;

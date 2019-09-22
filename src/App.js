import React from 'react';
import './App.css';

//views
import Home from './views/Home'
import HowWork from './views/HowWork'
import WhenView from './views/WhenView'
import RegisterCTA from './views/RegisterCTA'
import Footer from './views/Footer'

function App() {
  return (
    <div className="App">
      <Home/>
      <HowWork/>
      <WhenView/>
      <RegisterCTA/>
      <Footer/>
    </div>
  );
}

export default App;

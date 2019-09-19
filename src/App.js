import React from 'react';
import './App.css';

//views
import Home from './views/Home'
import HowWork from './views/HowWork'
import WhenView from './views/WhenView'

function App() {
  return (
    <div className="App">
      <Home/>
      <HowWork/>
      <WhenView/>
    </div>
  );
}

export default App;

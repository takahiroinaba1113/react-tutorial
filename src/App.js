import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name="name1" heroName="badman"/>
      <Greet name="nameName" heroName="superMan"/>
      <Greet name="nameName2" heroName="superWoman"/>
      <Welcome name="name1"/>
      <Welcome name="name2"/>
      <Welcome name="name3"/>
      <Hello />
    </div>
  );
}

export default App;

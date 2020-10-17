import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
      <Counter addValue='1' />
      <Greet name="Name" akaName="akaName"/>
      <Welcome name="welcome name" akaName="welcome aka name" />
    </div>
  );
}

export default App;

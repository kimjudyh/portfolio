import React from 'react';
import './App.css';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';

function App() {
  return (
    <div className="app">
      <h1>
      hello, this is portfolio owo
      </h1>
      <About />
      <Project />
      <Resume />
    </div>
  );
}

export default App;

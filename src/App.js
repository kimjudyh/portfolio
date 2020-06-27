import React from 'react';
// import './App.css';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <div className="app container">
      <h1>
      hello, this is portfolio owo
      </h1>
      <About />
      <Project />
      <Resume />
      <Footer />
    </div>
    </>
  );
}

export default App;

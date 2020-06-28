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
        welcome to my portfolio
      </h1>
      <About />
      <Resume />
      <Project />
      <Footer />
    </div>
    </>
  );
}

export default App;

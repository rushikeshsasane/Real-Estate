import React from 'react';
import './App.css';
import Headers from './Components/Headers/Headers';
import Heros from './Components/Heros/Heros';
import Companies from './Components/Companies/Companies';
import Residencies from './Components/Residencies/Residencies';
import Value from './Components/Value/Value';
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';
export default function () {
  return (
    <div className='App'>
    <div>
    <div className="white-gradient"/>
      <Headers/>
      <Heros/>
    </div>
      <Companies/>
      <Residencies/>
      <Value />
      <Contact/>
      <GetStarted/>
       <Footer/>
    </div>
  )
}

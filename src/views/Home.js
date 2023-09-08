import React from 'react';
import Header from '../componentes/Header/Header';
import Activities from './../componentes/Activities';
import Mission from './../componentes/Mission';
import Vision from './../componentes/Vision';
import Values from './../componentes/Values';
import Projects from './../componentes/Projects';
import Supporters from './../componentes/Supporters';

function Home() {
  return (
    <div className="App">
     
      <Header />
      <div style={{ height: "190px" }}></div>
      <Activities />
      <Mission />
      <Vision />
      <Values />
      <Projects />
      <Supporters />
    </div>
  );
}

export default Home;

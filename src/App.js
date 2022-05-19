import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Form from './Components/Form/Form';
import MadLibz from './Components/MadLibz/MadLibz';



function App() {

  return (
    <div>
      <nav>
        <Link to='/'>
          <img src='/Madlibsicon 3.png' style={{width:250, height:100}} alt='MadLibs Icon' />
        </Link>
      </nav>
      <main>
        <MadLibz />
        <Routes>
          <Route path='/' element={<Form />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
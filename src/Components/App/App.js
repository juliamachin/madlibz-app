import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Form from '../Form/Form';
import MadData from '../MadData/MadData';


function App() {

  return (
    <div>
      <nav>
        <Link to='/'>
          <h2>MadLibs</h2>
        </Link>
      </nav>
      <main>
        <MadData />
        <Routes>
          <Route path='/' element={<Form />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
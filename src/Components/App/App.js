import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Form from '../Form/Form';
import MadLibz from '../MadLibz/MadLibz';

function App() {

  return (
    <div>
      <nav>
        <Link to='/'>
          <h2>MadLibs</h2>
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
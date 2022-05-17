import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from '../Home/Home';
import Form from '../Form/Form';
import Story from '../Story/Story';
import Share from '../Share/Share';


function App() {
  const [story, setStory] = useState([])

  useEffect(() => {
    fetch(`http://madlibz.herokuapp.com/api/random`)
      .then((response) => response.json())
      .then((data) => {
        setStory(data);
      });
  }, []);
  console.log(story)

  return (
    <div>
      <nav>
        <Link to='/'>
          <h2>MadLibs</h2>
        </Link>
        <Link to='/form'>
          <p>Form</p>
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
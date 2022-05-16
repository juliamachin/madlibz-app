import './App.css';
import {useEffect, useState} from 'react';
import {Route, Routes, Link, Navigate} from 'react-router-dom';



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
    <div className="App">
      <form>
        <input type='text' placeholder='search' />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
}

export default App;
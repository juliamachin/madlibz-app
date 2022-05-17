import './Story.css';
import {useEffect, useState} from 'react';

function Story() {
    const [stories, setStories] = useState([])

  useEffect(() => {
    fetch(`http://madlibz.herokuapp.com/api/random`)
      .then((response) => response.json())
      .then((data) => {
        setStories(data);
      });
  }, []);

  console.log(stories)
    return (
        <div>
            <h2>Story</h2>
        </div>
    )
}

export default Story;
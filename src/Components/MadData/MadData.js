import {useState, useEffect} from 'react';
import Form from '../Form/Form';

function MadData () {
    const [storyData, setStoryData] = useState([]);
    const [userInput, setUserInput] = useState({});

    useEffect(() => {
        fetch(`http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25`)
            .then((response) => response.json())
            .then((data) => {
                setStoryData(...data);
            });
    }, []);
    console.log(storyData)

    const madLibz = storyData.map((blank, index) => setUserInput((prevUserInput) => ({
        ...prevUserInput, ['${index}-${blank}']: '',
    })))


    const handleUserInput = (event) => {
        const key = event.target.id;
        const value = event.target.value;
        setUserInput({...userInput, [key]: value});
    }
    
    return (
        <Form 
        blanks={madLibz.blanks}
        userInput={userInput}
        handleUserInput={handleUserInput}
        />
    )


}

export default MadData;
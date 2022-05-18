import { useState, useEffect } from 'react';
import Form from "../Form/Form";


function MadLibz() {
    const [formData, setFormData] = useState({});
    const [userInput, setUserInput] = useState({});

    useEffect(() => {
        fetch(`http://madlibz.herokuapp.com/api/random`)
            .then((response) => response.json())
            //.then((data) => console.log(data))
            .then((data) => {
                setFormData(data)
            })
            .catch(() => {
                console.log('error')
            });
    }, []);
    console.log(formData)

    formData.blanks.map((blank, index) => {
        setUserInput((prevUserInput) => ({
            ...prevUserInput,
            [`${index}-${blank}`]: '',
        }))
    })

    const handleUserInput = (event) => {
        const key = event.target.id;
        const value = event.target.value;
        setUserInput({ ...userInput, [key]: value });
    }
    //handleSubmit funtion to save user's input
    const handleSubmit = (event) => {
        event.preventDefault()
        let inputs = [];
        for (const key in userInput) {
            if (userInput[key] === '') {
                inputs.push(key);
            }
        }
    }

        return (
            <Form
                blanks={formData.blanks}
                handleUserInput={handleUserInput}
                userInput={userInput}
                handleSubmit={handleSubmit}
            />
        )
    }

    export default MadLibz;
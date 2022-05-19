import React from "react";
import { useState, useEffect } from "react";
import Form from "../Form/Form";
import axios from "axios";

function MadLibz() {
  const [formData, setFormData] = useState([]);
  const [storyData, setStoryData] = useState([]);
  const [userInput, setUserInput] = useState({});
  //const [validForm, setValidForm] = useState(false);
  const [emptyArray, setEmptyArray] = useState([]);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      let response = await axios.get(`http://madlibz.herokuapp.com/api/random`);
      console.log(response.data);
      setFormData(response.data.blanks);
      setStoryData(response.data.value);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);
  console.log(storyData);

  const blankForm = formData.map((blank, index) => {
    console.log(blank);
    return <Form handleChange={handleChange} blanks={blank} id={index} />;
  });
  console.log(blankForm);

  function handleChange(event) {
    event.preventDefault();
    //setUserInput(event.target.value)
     const key = event.target.id;
     const value = event.target.value;
     setUserInput({ ...userInput, [key]:value});
  
  console.log(userInput)
  }



  return (
    <div>
      <form>
        {blankForm}
        <input type='Submit' />
      </form>
    </div>
  );
}

export default MadLibz;

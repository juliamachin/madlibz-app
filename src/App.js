import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Form from "./Components/Form/Form";
import Story from "./Components/Story/Story";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";

function App() {
  const [formData, setFormData] = useState([]);
  const [storyData, setStoryData] = useState([]);
  const [userInput, setUserInput] = useState({});
  const [title, setTitle] = useState("");
  const [newArray, setNewArray] = useState([]);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      let response = await axios.get(`http://madlibz.herokuapp.com/api/random`);
      //   console.log(response.data);
      setFormData(response.data.blanks);
      setStoryData(response.data.value);
      setTitle(response.data.title);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(formData);
  //console.log(storyData);
  //console.log(title);

  const blankForm = formData.map((blank, index) => {
    //console.log(index);
    return (
      <Form
        handleFormChange={handleFormChange}
        //handleFormSubmit={handleFormSubmit}
        blanks={blank}
        id={index}
        userInput={userInput}
      />
    );
  });
  //console.log(blankForm);

  function handleFormChange(event) {
    event.preventDefault();
    //setUserInput(event.target.value)
    const key = event.target.id;
    const value = event.target.value;
    setUserInput({ ...userInput, [key]: value });

    //  console.log(userInput);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let arr = [];
    for (const key in userInput) {
      arr.push(userInput[key]);
    }
    setNewArray(arr);
  }
  //console.log(newArray);

  //   };
  // const story = storyData.map((stuff) => {
  //   //console.log(stuff);
  // });

  return (
    <div>
      <Nav />
      {blankForm}
      <input type="submit" value="Submit" onClick={handleFormSubmit} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/story"
            element={
              <Story title={title} inputArr={newArray} story={storyData} />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

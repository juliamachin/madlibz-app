import "./App.css";
import { useEffect, useState, React } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Form from "./Components/Form/Form";
import Story from "./Components/Story/Story";
import Home from "./Components/Home/Home";

function App() {
  const [formData, setFormData] = useState([]);
  const [storyData, setStoryData] = useState([]);
  const [userInput, setUserInput] = useState({});
  const [newArray, setNewArray] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      let response = await axios.get(`http://madlibz.herokuapp.com/api/random`);
      console.log(response.data);
      setFormData(response.data.blanks);
      setStoryData(response.data.value);
      setTitle(response.data.title);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);
  console.log(storyData);
  console.log(title);

  const blankForm = formData.map((blank, index) => {
    console.log(blank);
    return (
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        blanks={blank}
        id={index}
      />
    );
  });
  //console.log(blankForm);

  function handleChange(event) {
    event.preventDefault();
    //setUserInput(event.target.value)
    const key = event.target.id;
    const value = event.target.value;
    setUserInput({ ...userInput, [key]: value });

    console.log(userInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let arr = [];
    for (const key in userInput) {
      if (userInput[key] === "") {
        arr.push(key);
      }
    }
    setNewArray([...arr]);
    console.log(newArray);
    // if (arr.length === 0) {
    //   setValidForm(true);
    // }
  }
  //   const newStory = (event) => {
  //     apiCall();
  //   };
  const story = storyData.map((stuff) => {
    console.log(stuff);
  });

  return (
    <div>
      <form>
        {blankForm}
        <input type="Submit" />
      </form>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

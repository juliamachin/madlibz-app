import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <div>
      <input
        type='text'
        onChange={props.handleChange}
        placeholder={props.blanks}
        value={props.userInput}
        id={props.id}
      />
    </div>
  );
}

export default Form;

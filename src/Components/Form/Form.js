import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <div>
      <input
        type="text"
        handleChange={props.handleChange}
        placeholder={props.blanks}
        value={props.userInput}
        id={props.id}
        handleSubmit={props.handleSubmit}
        required
      />
    </div>
  );
}

export default Form;

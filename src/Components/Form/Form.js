import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          handleChange={props.handleChange}
          placeholder={props.blanks}
          value={props.userInput}
          id={props.id}
          handleSubmit={props.handleSubmit}
          required
        />
      </form>
    </div>
  );
}

export default Form;

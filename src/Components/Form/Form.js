import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={props.handleFormChange}
          placeholder={props.blanks}
          //   value={props.userInput}
          id={props.id}
          required
        />
      </form>
    </div>
  );
}

export default Form;

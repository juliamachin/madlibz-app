import React from "react";
import "./Form.css";

function Form(props) {
  //console.log(props.blanks);
  if (props.blanks !== undefined) {
    return (
      <div className="form-body">
        <input
          className="input"
          type="text"
          onChange={props.handleFormChange}
          placeholder={props.blanks}
          id={props.id}
          required
        />
      </div>
    );
  }
}

export default Form;

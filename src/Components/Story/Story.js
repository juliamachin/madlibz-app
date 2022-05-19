import React from "react";
import "./Story.css";

function Story(props) {
  //console.log(props.title);
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
}

export default Story;

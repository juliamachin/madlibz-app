import React from "react";
import "./Story.css";

function Story(props) {
  //console.log(props.story);
  const story = props.story.map((stuff, index) => {
    if (stuff !== 0) {
      return (
        <React.Fragment>
          {stuff} {props.inputArr[index]}
        </React.Fragment>
      );
    }
  });

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{story}</p>
    </div>
  );
}

export default Story;

import React from "react";
import "./Story.css";

function Story(props) {
  //console.log(props.story);
  const story = props.story.map((stuff, index) => {
    //console.log(props.inputArr);
    return (
      <div>
        <p>
          {stuff} {props.inputArr[index]}
        </p>
      </div>
    );
  });

  return (
    <div>
      <h2>{props.title}</h2>
      {story}
    </div>
  );
}

export default Story;

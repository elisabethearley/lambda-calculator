import React from "react";

const NumberButton = (props) => {
  return (
    <button className="numbers"
      onClick={() => props.setDisplay
        (props.display === 0 ? props.number : `${props.display}${props.number}`)
      }>
      {props.number}{/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;
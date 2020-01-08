import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="operators"
      onClick={() => {
        switch(props.operator.char) {
          case '=' :
            return props.setDisplay(eval(props.display))
          default: 
            return props.setDisplay(`${props.display}${props.operator.value}`)
        }
      }}>
      {props.operator.char}{/* Display a button element rendering the data being passed down from the parent container on props */}  
    </button>
  );
};

export default OperatorButton;

import React from "react";

import OperatorButton from "./OperatorButton"; //import any components needed

import { operators } from "../../../data"; //Import your array data to from the provided data file

const Operators = (props) => {
  console.log(operators);
  // STEP 2 - add the imported data to state
  return (
    <div className="operatorsContent">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operators.map((item, index) => {
         return <OperatorButton key={`${item.char}-${index}`} operator={item} display={props.display} setDisplay={props.setDisplay}/>
       })}
    </div>
  );
};

export default Operators;

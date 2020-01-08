import React from "react";

import SpecialButton from "./SpecialButton"; //import any components needed

import { specials } from "../../../data"; //Import your array data to from the provided data file

const Specials = (props) => {
  console.log(specials);
  // STEP 2 - add the imported data to state

  return (
    <div className="specialsContent">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specials.map((item, index) => {
         return <SpecialButton key={`${item}-${index}`} special={item} display={props.display} setDisplay={props.setDisplay} />
       })}
    </div>
  );
};

export default Specials;
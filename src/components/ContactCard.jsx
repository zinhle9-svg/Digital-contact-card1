import React from "react";
import { pic1, pic2 } from "../images/index.js";
import { click } from "@testing-library/user-event/dist/click.js";
// import React, {useState} from "react";

const Person = (props) => {
  return (
    <>
      <h2>firstName: {props.firstName} </h2>
      <h2>role: {props.role}</h2>
    </>
  );
};

function ContactCard() {
  return (
    <>
      <div className="heading">
        <h1>Contact card</h1>
      </div>
      <div className="photo">
        <img src={pic1} alt="" style={{ height: 200 }}></img>
      </div>

      <Person firstName="Busi" role="Admin" />
      <div>

     
      </div>
    </>
  );
}

export default ContactCard;

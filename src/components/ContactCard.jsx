import React from "react";
import { pic1 } from "../images/index.js";


const Person = (props) => {
  return (
    <div className="text">
      <h2>Name: {props.Name} </h2>
      <h2>Role: {props.role}</h2>
    </div>
  );
};

function ContactCard() {
  return (
    <>
      <div className="heading">
        <h1>Contact me</h1>
      </div>
      <div className="photo">
        <img src={pic1} alt="" style={{ height: 200 }}></img>
      </div>

      <Person Name="Busi" role="Admin" />
      
      <div>

     
      </div>
    </>
  );
}

export default ContactCard;

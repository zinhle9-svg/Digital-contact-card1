import React from "react";
import ContactCard from "./components/ContactCard";
import './App.css';
import {useState} from "react";


const App = (props) => {
  const [showContact, setShowContact] = useState(false);
  const handleClick = () => {
    setShowContact(!showContact);
  };
 

  return  (
   
    <div className="App">
       <ContactCard/>
      <button className="button" onClick={handleClick}>
      {showContact ? "Hide Contact Info" : "Show Contact Info"}
      </button>
        
   
      {showContact && ( 
        <div className="text">
        <h2>Email: {props.email}</h2>
          <h2>Phone: {props.phone}</h2>
          </div>)
}
    </div> 
  );
};
   


    
      
     
 


export default App;

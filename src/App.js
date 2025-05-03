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
      <button onClick={handleClick}>
      {showContact ? "Hide Contact Info" : "Show Contact Info"}
      </button>
        
   
      {showContact && ( 
        <>
        <h2>email: {props.email}</h2>
          <h2>phone: {props.phone}</h2>
          </>)
}
    </div> 
  );
};
   


    
      
     
 


export default App;

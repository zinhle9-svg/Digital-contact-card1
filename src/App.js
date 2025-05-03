import React from "react";
import ContactCard from "./components/ContactCard";
import './App.css';
import {useState} from "react";


const App = () => {
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
        <h2>email: Busi@example.com</h2>
          <h2>phone: 123-456-7890</h2>
          </>)
}
    </div> 
  );
};
   


    
      
     
 


export default App;

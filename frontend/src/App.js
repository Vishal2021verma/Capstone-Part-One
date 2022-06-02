import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";


function App() {
  const [state, setState] = useState([]);
  const getData = async () => {
    const response = await fetch("/", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
     
    setState(data);
  }

  useEffect(() => {
    getData();
  });
  const myName = "Vishal";
  return ( 
    <div className="App">
      {state}
    </div>
  );
}

export default App;

//App.js

import React, { useState } from "react";
import "./App.css";


export default function App() {
  const [data, setData] = useState('');

  // request data from web server
  async function apiCall() {
    const response = await fetch("http://localhost:8080");
    const newData = await response.text();
    console.log(data);
    setData(newData);
  }


  

    //data will be the string we send from our server



    // async function apiCall() {
    //   const data = await fetch("http://localhost:8080");
    //   console.log(data);
    //   setData(data);

    // }
  
    return (

    <div className="App">
      <header className="App-header">
        <h1>{data}</h1>
        <button onClick={apiCall}>Make API Call</button>
      </header>
    </div>
  );
}

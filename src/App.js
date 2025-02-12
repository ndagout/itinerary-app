import React from "react";
import "./App.css";
import Itinerary from './components/Itinerary'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome</h1>
        <p>start building your travel itinerary</p>
      </header>
             <Itinerary /> 
    </div>
  );
}

export default App;

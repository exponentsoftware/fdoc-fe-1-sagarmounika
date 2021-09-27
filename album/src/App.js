import React from "react";
import "./App.css";
import Albums from "./components/Albums/Albums";
import { data } from "./components/Data"
function App() {
  return <div className="App">
    <Albums data={data} />
  </div>;
}

export default App;

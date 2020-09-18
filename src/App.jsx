import React, { useState } from "react";
import Result from "./components/result";
import Buttons from "./components/buttons";
import "./App.css";

const App = () => {

  const [ result, setResult ] = useState('0')

  return (
    <div className="calc-container">
      <Result value={result} />
      <Buttons setResult={setResult}  />
    </div>
  );
};

export default App;
